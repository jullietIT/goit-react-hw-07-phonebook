import { createSlice } from '@reduxjs/toolkit';
const initialFilterState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    setStatusFilter(_, { payload }) {
      return payload;
    },
  },
});

// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: { status: '' },
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
