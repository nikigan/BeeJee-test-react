import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    visible: false
  },
  reducers: {
    makeVisible: state => { state.visible = true },
    makeInvisible: state => { state.visible = false }
  }
});

export const { makeVisible, makeInvisible } = formSlice.actions;

export const selectFormVisibility = state => state.form.visible;

export default formSlice.reducer;