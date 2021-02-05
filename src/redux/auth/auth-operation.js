import axios from 'axios';
import { createAsuncThunk } from '@reduxjs/toolkit';

axios.default.baseURL = 'https://transformator98-phonebook.netlify.app/';

const register = createAsuncThunk('auth/register', async options => {
  try {
    const { data } = await axios.post('/user/signup', options);
  } catch (error) {
    // error.message;
  }
});
