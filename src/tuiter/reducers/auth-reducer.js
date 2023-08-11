import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, register} from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, { payload }) => {
     state.currentUser = payload;
     console.log(state.currentUser);
   },
   [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      console.log(state.currentUser);
    },
     [register.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
     }, //IMPLEMENT THIS
 },
});
export default authSlice.reducer;