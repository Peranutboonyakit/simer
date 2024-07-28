import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:5000/api";

interface AuthType {
  me: {
    username: string;
    email: string;
    image: string;
  };
  isLogIn: boolean;
  isLoading: boolean;
  error: string | null;
}

export const postSignIn = createAsyncThunk(
  "auth/signIn",
  async (userData: { email: string; password: string }) => {
    const resp = await axios.post(`${apiUrl}/auth/signin`, userData);
    return resp.data;
  }
);

const initialState = {
  me: {
    username: "",
    email: "",
    image: "",
  },
  isLogIn: false,
  isLoading: false,
  error: "" || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
          console.log(action, "pend");
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = null;
          console.log(action, "rej");
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state, action: PayloadAction<AuthType>) => {
          console.log(state, "full");
          console.log(action, "full");
        }
      );
  },
});

export default authSlice.reducer;
