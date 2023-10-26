import { useState } from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';
import { sendOTP, verifyOTP } from '../api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Registration() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [sentOTP, setSentOTP] = useState(false);
  const [hash, setHash] = useState(null);
  const [verified, setVerified] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from the context

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const response = await sendOTP(phoneNumber);
      setHash(response.hash);
      setSentOTP(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  }

  const handleVerifyOTP = async () => {
    if (!hash) {
      console.error('No hash available for OTP verification.');
      return;
    }

    try {
      const response = await verifyOTP(phoneNumber, otp, hash);

      document.cookie = `accessToken=${response.accessToken}; Secure; SameSite=None;`;
      document.cookie = `refreshToken=${response.refreshToken}; Secure; SameSite=None;`;
      // Update the authenticated status using the login function
      login(response.accessToken);
      setVerified(true);
      navigate('/user');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  }

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Registration</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Grid>
          {sentOTP ? (
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="OTP"
                name="otp"
                value={otp}
                onChange={handleOTPChange}
              />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={sentOTP ? handleVerifyOTP : handleSendOTP}
            >
              {sentOTP ? 'Verify OTP' : 'Send OTP'}
            </Button>
          </Grid>
        </Grid>
        {sentOTP && !verified && <p>Waiting for OTP verification...</p>}
        {verified && <p>OTP has been verified. You can now proceed to the dashboard.</p>}
      </div>
    </Container>
  );
  
}

export default Registration;
