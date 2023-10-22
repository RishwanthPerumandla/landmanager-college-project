const jwt = require('jsonwebtoken');
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const User = require('../models/UserModel');

module.exports = (acceptedRoles) => {
    return async (req, res, next) => {
        const accessToken = req.cookies.accessToken;

        try {
            const decoded = jwt.verify(accessToken, JWT_AUTH_TOKEN);
            const user = await User.findOne({ email: decoded.email });

            if (!user) {
                return res.status(403).send({ success: false, msg: 'User not found' });
            }

            req.user = user;

            if (acceptedRoles.includes(user.role)) {
                next(); // User has the required role
            } else {
                return res.status(403).send({ success: false, msg: 'Access Denied! Insufficient privileges.' });
            }
        } catch (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).send({ success: false, msg: 'Access token expired' });
            } else {
                return res.status(403).send({ success: false, msg: 'User not authenticated' });
            }
        }
    };
};
