import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

// servers:('https://goit-phonebook-api.herokuapp.com');

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (options, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', options);
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      if (error.response.status === 400) {
        toast.error('User creation error! Please try again!');
      } else if (error.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
const logIn = createAsyncThunk(
  'auth/login',
  async (options, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', options);
      token.set(data.token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
const logOut = createAsyncThunk(
  'auth/logout',
  async (options, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout', options);
      token.unset();
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      if (error.response.status === 400) {
        toast.error('User creation error! Please try again!');
      } else if (error.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong!');
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default operations;
