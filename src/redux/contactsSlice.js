import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../components/ContactList/initialContacts.json';

const contactsInitialState = initialContacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// ============================================

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import '../components/ContactList/initialContacts.json';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   //   initialState: initialContacts,
//   reducers: {
//     addContacts: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//     },
//     // Код остальных редюсеров
//   },
// });

// //=============== After ========================
// // import { createAction } from '@reduxjs/toolkit';
// // export const addContacts = createAction('contacts/AddContact');

// // {type: "tasks/addTask", payload: "Learn Redux Toolkit"}

// // import { nanoid } from 'nanoid';

// // export const addContacts = text => {
// //   return {
// //     type: 'contacts/addContact',
// //     payload: {
// //       id: nanoid(),
// //       completed: false,
// //       text,
// //     },
// //   };
// // };

// // export const deleteContact = contactId => {
// //   return {
// //     type: 'contacts/deleteContact',
// //     payload: contactId,
// //   };
// // };

// // // export const toggleCompleted = taskId => {
// // //   return {
// // //     type: 'tasks/toggleCompleted',
// // //     payload: taskId,
// // //   };
// // // };

// // export const setStatusFilter = value => {
// //   return {
// //     type: 'filters/setStatusFilter',
// //     payload: value,
// //   };
// // };
