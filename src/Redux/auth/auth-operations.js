import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('/users​/register', async credentials => {
    try {
        const data = await axios.post('/users​/signup', credentials);
        console.log(data);
    } catch (error) {
        console.log('signup', error);
    }
})

const logIn = createAsyncThunk('/users​/logIn', async credentials => {
  try {
    const data = await axios.post('/users/login', credentials);
    console.log(data);
  } catch (error) {
    console.log('logIn', error);
  }
});

const logOut = createAsyncThunk('/users​/logOut', async credentials => {
  try {
    const data = await axios.post('/users/logout', credentials);
    console.log(data);
  } catch (error) {
    console.log('LogOut', error);
  }
});

const authOperations = {
    register
}

export default authOperations;