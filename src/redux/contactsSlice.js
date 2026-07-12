import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(
        ({ type }) => type.endsWith('pending'),
        state => {
          state.loading = true;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith('fulfilled'),
        state => {
          state.loading = false;
          state.error = null;
        }
      );
  },
});

export default contactsSlice.reducer;
