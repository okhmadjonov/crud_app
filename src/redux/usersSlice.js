import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    editUser: (state, action) => {
      const { id, firstName, checked } = action.payload;
      const existUser = state.users.find((user) => user.id === id);
      if (existUser) {
        existUser.firstName = firstName;
        existUser.checked = checked;
      }
    },

    deletUser: (state, action) => {
      const { id } = action.payload;
      const existUser = state.users.find((user) => user.id === id);
      if (existUser) {
        state.users = state.users.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, deletUser, editUser } = usersSlice.actions;
export default usersSlice.reducer;
