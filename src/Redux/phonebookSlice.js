import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phonebookInitialState } from './initialState/phonebookInitialState';

import { handleFulfilled, handleFulfilledAdd, handleFulfilledDelete, handleFulfilledGet, handlePending, handleRejected } from 'components/services/services';
import authOperations from './auth/auth-operations';

const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};


export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: phonebookInitialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.getContacts.fulfilled, handleFulfilledGet)
      .addCase(authOperations.addContact.fulfilled, handleFulfilledAdd)
      .addCase(authOperations.deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(
          authOperations.addContact[STATUS.PENDING],
          authOperations.deleteContact[STATUS.PENDING],
          authOperations.getContacts[STATUS.PENDING]
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          authOperations.addContact[STATUS.REJECTED],
          authOperations.deleteContact[STATUS.REJECTED],
          authOperations.getContacts[STATUS.REJECTED]
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          authOperations.addContact[STATUS.FULFILLED],
          authOperations.deleteContact[STATUS.FULFILLED],
          authOperations.getContacts[STATUS.FULFILLED]
        ),
        handleFulfilled
      );
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } =
  phonebookSlice.actions;


export const phonebookReducer = phonebookSlice.reducer;