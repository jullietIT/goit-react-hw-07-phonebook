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
  state.items = action.payload;
};

const addContactsReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactsReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
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

//   extraReducers:  {
// //     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     [addContacts.pending]: handlePending,
//     [addContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.push(action.payload);
//     },
//     [addContacts.rejected]: handleRejected,
//     [deleteContacts.pending]: handlePending,
//     [deleteContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.contacts.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.contacts.splice(index, 1);
//     },
//     [deleteContacts.rejected]: handleRejected,
//   },
// });

export const contactsReducer = contactsSlice.reducer;
//==================================================================
// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import initialContacts from '../components/ContactList/initialContacts.json';

// onst contactsInitialState = initialContacts;c

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             name,
//             number,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteContacts(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// // Экспортируем генераторы экшенов и редюсер
// export const { addContacts, deleteContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
