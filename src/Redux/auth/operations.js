import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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
     toast.error('Ooops');
    }
})

const logIn = createAsyncThunk('/users/logIn', async credentials => {
    try {
        const {data} = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
      toast.error('Ooops');
    }
});

const logOut = createAsyncThunk('/users/logOut', async credentials => {
  try {
      await axios.post('/users/logout', credentials);
      token.unset();
  } catch (error) {
      toast.error('Ooops');
  }
});

const getContacts = createAsyncThunk('/contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
      toast.error('Ooops');
  }
});

const addContact = createAsyncThunk('/addContact', async credentials => {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {
      toast.error('Ooops');
  }
});

const deleteContact = createAsyncThunk('/deleteContact', async credentials => {
  try {
    const { data } = await axios.delete(`/contacts/${credentials}`);
    return data;
  } catch (error) {
      toast.error('Ooops');
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
      toast.error('Ooops');
}

})

const operations = {
  register,
  logIn,
  logOut,
  getContacts,
  addContact,
  deleteContact,
  fetchCurrentUser,
};

export default operations;