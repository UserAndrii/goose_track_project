import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showErrorToast } from '../../components/ErrorFunction/showErrorToast';

axios.defaults.baseURL = 'https://goose-track-project-back.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  '/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/register', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    showErrorToast(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  '/current',
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      //   setAuthHeader(persistedToken);
      const response = await axios.get('/current');
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  '/user',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('/user', credentials);
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
