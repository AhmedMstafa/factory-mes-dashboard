import { configureStore, createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export const { actions: themeAction } = themeSlice;
