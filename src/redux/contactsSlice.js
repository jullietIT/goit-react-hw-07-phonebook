import { fetchContacts, addContacts, deleteContacts } from './operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const extraActions = [fetchContacts, addContacts, deleteContacts];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const fetchContactsReducer = (state, action) => {
  state.contacts = action.payload;
};

const addContactsReducer = (state, action) => {
  state.contacts.push(action.payload);
};

const deleteContactsReducer = (state, action) => {
  const index = state.contacts.findIndex(task => task.id === action.payload.id);
  state.contacts.splice(index, 1);
};

const contactsSlice = createSlice({
  // Код остальных редюсеров
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsReducer)
      .addCase(addContacts.fulfilled, addContactsReducer)
      .addCase(deleteContacts.fulfilled, deleteContactsReducer)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected)
      .addMatcher(isAnyOf(...getActions('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
