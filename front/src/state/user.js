import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const register = createAsyncThunk("REGISTER_REQUEST", (data) => {
  return axios
    .post("http://localhost:8080/api/auth/register", data)
    .then((respuesta) => []);
});

const userReducer = createReducer([], {
  [register.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
