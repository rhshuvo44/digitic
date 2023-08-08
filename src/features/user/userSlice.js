import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authServices } from "./userServices";
import { toast } from "react-toastify";

export const registerUsers = createAsyncThunk(
  "auth/register-user",
  async (userData, thunkApi) => {
    try {
      return await authServices.registerUser(userData);
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);
const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdUsers = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});

export default authSlice.reducer;
