import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.default.baseURL = 'https://transformator98-phonebook.netlify.app/';
axios.default.baseURL = 'https://goit-phonebook-api.herokuapp.com/';
// servers:('https://goit-phonebook-api.herokuapp.com/');

const register = createAsyncThunk('auth/register', async options => {
  try {
    const { data } = await axios.post('/user/signup', options);
  } catch (error) {
    // error.message;
  }
});
