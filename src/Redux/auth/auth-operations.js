import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = ``;
    },
};

const register = createAsyncThunk('/users/register', async credentials => {
    try {
        const {data} = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log('signup', error);
    }
})

const logIn = createAsyncThunk('/users/logIn', async credentials => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log('logIn', error);
    }
});

const logOut = createAsyncThunk('/users/logOut', async credentials => {
  try {
      await axios.post('/users/logout', credentials);
      token.unset();
  } catch (error) {
    console.log('LogOut', error);
  }
});

const authOperations = {
  register,
    logIn,
  logOut,
};

export default authOperations;