import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], // We have Declared Empty Array as initial State
  reducers: {
    addUser(state, action) {
      state.push(action.payload); //puses data into array(initialState: [])
    },
    removeUser(state, action) {
      state.splice(action.payload, 1); //Removes Single Element From Array
    },
    removeAllUser(state, action) {
      return []; // Empty The Whole Array
    },
  },
});
console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeAllUser, removeUser } = userSlice.actions;
