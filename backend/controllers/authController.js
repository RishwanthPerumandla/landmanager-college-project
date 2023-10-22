const crypto = require('crypto');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const smsKey = process.env.SMS_SECRET_KEY;
const twilioNum = process.env.TWILIO_PHONE_NUMBER;
const { refreshTokenCookieConfig, accessTokenCookieConfig } = require('../config/cookieConfig'); // Define cookie configurations
const User = require('../models/UserModel'); // Import your User model
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
let refreshTokens = [];
const saltRounds = 10;

const sendOTP = async (req, res) => {
  try {
    // Define validation rules
    const validationRules = [
        body('phoneno').isMobilePhone().withMessage('Invalid phone number format'),
    ];

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const { phoneno } = req.body;
    if (!phoneno) {
        return res.status(400).send({ error: 'Phone number is required' });
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    const ttl = 2 * 60 * 1000;
    const expires = Date.now() + ttl;
    const data = `${phoneno}.${otp}.${expires}`;
    const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');
    const fullHash = `${hash}.${expires}`;
    // use for production only
    // Use Twilio to send OTP via SMS
    // await client.messages.create({
    //   body: `Your One Time Login Password For LandManager App is ${otp}`,
    //   from: twilioNum,
    //   to: phoneno
    // });

    // Return OTP hash and expiration time
    res.status(200).send({ phoneno, hash: fullHash, otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).send({ error: 'Failed to send OTP' });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phoneno, hash, otp, notifToken } = req.body;
    const [hashValue, expires] = hash.split('.');

    let user = await User.findOne({ phoneno });
    let isUserNew = false;

    if (user === null) {
      user = new User({ phoneno, notifToken });
      await user.save();
      isUserNew = true;
    }

    const newUser = await User.findOne({ phoneno }).select('+newUser');
    const now = Date.now();

    if (now > parseInt(expires)) {
      return res.status(504).send({ msg: 'Timeout. Please try again' });
    }

    const data = `${phoneno}.${otp}.${expires}`;
    const newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex');

    if (newCalculatedHash === hashValue) {
      const accessToken = jwt.sign({ phoneno, id: newUser._id, role: 'CSM' }, JWT_AUTH_TOKEN, { expiresIn: '180s' });
      const refreshToken = jwt.sign({ phoneno, id: newUser._id, role: 'CSM' }, JWT_REFRESH_TOKEN, { expiresIn: '1y' });
      refreshTokens.push(refreshToken);

      user.notifToken = notifToken;
      user.markModified('notifToken');
      user.refreshToken = refreshToken;
      user.markModified('refreshToken');
      await user.save();

      const response = {
        newUser: isUserNew,
        msg: 'Device verified',
        accessToken,
        refreshToken,
      };

      res.status(202)
        .cookie('accessToken', accessToken, accessTokenCookieConfig)
        .cookie('refreshToken', refreshToken, refreshTokenCookieConfig)
        .cookie('authSession', true, accessTokenCookieConfig)
        .cookie('refreshTokenID', true, refreshTokenCookieConfig)
        .send(response);
    } else {
      console.log('not authenticated');
      return res.status(400).send({ verification: false, msg: 'Incorrect OTP' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).send({ error: 'Failed to verify OTP' });
  }
};


const refreshAccessToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(403).send({ message: 'Refresh token not found, log in again' });
    }

    jwt.verify(refreshToken, JWT_REFRESH_TOKEN, async (err, userData) => {
        if (!err) {
            const { id, role, email, phoneno } = userData;

            // Check the user's role here
            if (role === 'CSM') {
                // For 'CSM' role with phone auth
                const accessToken = jwt.sign({ phoneno, id, role }, JWT_AUTH_TOKEN, {
                    expiresIn: '60s'
                });

                // Set cookies for the new access token
                res
                    .status(200)
                    .cookie('accessToken', accessToken, {
                        expires: new Date(new Date().getTime() + 30 * 1000),
                        sameSite: 'none',
                        httpOnly: true,
                        secure: true
                    })
                    .cookie('authSession', true, {
                        expires: new Date(new Date().getTime() + 30 * 1000),
                        sameSite: 'none',
                        secure: true
                    })
                    .send({ previousSessionExpired: true, success: true, accessToken: accessToken });
            } else if (role === 'ADM' || role === 'MOD' || role === 'LM') {
                // For 'ADM', 'MOD', and 'LM' roles with email auth
                const accessToken = jwt.sign({ email, id, role }, JWT_AUTH_TOKEN, {
                    expiresIn: '60s'
                });

                // Set cookies for the new access token
                res
                    .status(200)
                    .cookie('accessToken', accessToken, {
                        expires: new Date(new Date().getTime() + 30 * 1000),
                        sameSite: 'none',
                        httpOnly: true,
                        secure: true
                    })
                    .cookie('authSession', true, {
                        expires: new Date(new Date().getTime() + 30 * 1000),
                        sameSite: 'none',
                        secure: true
                    })
                    .send({ previousSessionExpired: true, success: true, accessToken: accessToken });
            } else {
                return res.status(403).send({
                    success: false,
                    msg: 'Invalid role for token refresh'
                });
            }
        } else {
            return res.status(403).send({
                success: false,
                msg: 'Invalid refresh token'
            });
        }
    });
};



const logoutUser = (req, res) => {
    // Clear cookies to log out the user
    res
        .clearCookie('refreshToken')
        .clearCookie('accessToken')
        .clearCookie('authSession')
        .clearCookie('refreshTokenID')
        .send({ msg: 'Logout Successful' });
};


async function register(req, res) {
  try {
    const userData = req.body;
    const { email, password, phoneno } = userData;
    const hash = await bcrypt.hash(password, saltRounds);

    const record = await User.findOne({ email });
    if (record) {
      return res.status(200).json({ message: 'Account Already Exists' });
    }

    const data = new User({
      name: userData.name,
      email,
      phoneno,
      password: hash,
      role: userData.role || 'CSM',
    });
    await data.save();

    return res.status(200).json({
      success: true,
      message: 'Account Successfully Created',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

async function registerAdmin(req, res) {
  // Ensure that this route is now protected by roleMiddleware
  // No need to check 'ADM' role here
  try {
    const userData = req.body;
    const { email, password, phoneno } = userData;
    const hash = await bcrypt.hash(password, saltRounds);

    const record = await User.findOne({ email });
    if (record) {
      return res.status(200).json({ message: 'Account Already Exists' });
    }

    const data = new User({
      name: userData.name,
      email,
      phoneno,
      password: hash,
      role: userData.role || 'ADM',
    });
    await data.save();

    return res.status(200).json({
      success: true,
      message: 'Account Successfully Created',
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}

async function login(req, res) {
    try {
      const userData = req.body;
      const { email, password, phoneno } = userData;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User Not Found' });
      }
  
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).json({
          accessToken: null,
          refreshToken: null, // Include this line to send a null refresh token
          message: 'Invalid Password',
        });
      }
  
      const accessToken = jwt.sign({ id: user.id, username: user.name, role: user.role }, process.env.JWT_AUTH_TOKEN, {
        expiresIn: '24h',
      });
  
      // Generate a new refresh token
      const refreshToken = jwt.sign({ id: user.id, username: user.name, role: user.role }, process.env.JWT_REFRESH_TOKEN, {
        expiresIn: '7d', // Set the desired expiration time for the refresh token
      });
  
      // Set the refresh token in a cookie
      const refreshTokenCookieConfig = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Set the same expiration time as the token
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      };
  
      res.cookie('accessToken', accessToken, {
        path: '/',
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24,
      });
  
      res.cookie('refreshToken', refreshToken, refreshTokenCookieConfig);
  
      return res.status(200).json({
        id: user._id,
        username: user.name,
        email: user.email,
        role: user.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
  

module.exports = { sendOTP, verifyOTP, refreshAccessToken, register, registerAdmin, login, logoutUser};




