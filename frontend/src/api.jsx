/* eslint-disable no-useless-catch */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',    
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendOTP = async (phoneNumber) => {
  try {
    const response = await api.post('/auth/user/sendOTP', { phoneno: phoneNumber });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOTP = async (phoneNumber, otp,hash) => {
  try {
    const response = await api.post('/auth/user/verifyOTP', { phoneno: phoneNumber, otp, hash   });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions for different endpoints as needed
