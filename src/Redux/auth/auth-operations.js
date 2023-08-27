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
        console.log('register', error);
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

const getContacts = createAsyncThunk('/contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('getContacts', error);
  }
});

const addContact = createAsyncThunk('/addContact', async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {
    console.log('getContacts', error);
  }
});

const deleteContact = createAsyncThunk('/deleteContact', async credentials => {
  try {
    const { data } = await axios.delete(`/contacts/${credentials}`);
    return data;
  } catch (error) {
    console.log('deleteContact', error);
  }
});

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
try {
    const { data } = await axios.get('/users/current');
    return data;
} catch (error) {
  console.log('refresh', error);
}

})

const authOperations = {
  register,
  logIn,
  logOut,
  getContacts,
  addContact,
  deleteContact,
  fetchCurrentUser,
};

export default authOperations;