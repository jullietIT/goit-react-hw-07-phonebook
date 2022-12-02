import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { status: '' },
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
