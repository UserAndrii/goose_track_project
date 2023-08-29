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
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post('/register', formData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('User register error.');
        }
        if (status === 409) {
          showErrorToast('User already exists.');
        }
        if (status === 500) {
          showErrorToast('Server error.');
        }
      }
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
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          showErrorToast('User login error.');
        }
        if (status === 401) {
          showErrorToast('Email or password is wrong.');
        }
        if (status === 500) {
          showErrorToast('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        showErrorToast('Not authorized.');
      }
      if (status === 500) {
        showErrorToast('Server error.');
      }
    }
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  '/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/current');
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) {
          showErrorToast('Not authorized.');
        }
        if (status === 500) {
          showErrorToast('Server error.');
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  '/user',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch('/user', credentials);
      getCurrentUser();
      return response.data;
    } catch (error) {
      showErrorToast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
