import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const operation = createAsyncThunk("OPERATION_REQUEST", (data) => {
  return axios
    .post("http://localhost:8080/api/operations", data)
    .then((respuesta) => []);
});

const operationReducer = createReducer([], {
  [operation.fulfilled]: (state, action) => action.payload,

});

export default operationReducer;
