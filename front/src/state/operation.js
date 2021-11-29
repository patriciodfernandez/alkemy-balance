import {
  createReducer,
 
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const operation = createAsyncThunk("OPERATION_REQUEST", (data) => {
  return axios
    .post("http://localhost:8080/api/operations", data)
    .then((respuesta) => []);
});

export const operations = createAsyncThunk("OPERATIONS_GET", () => {
  return axios
  .get("http://localhost:8080/api/operations")
  .then((r) => r.data);
});
 
const operationReducer = createReducer([], {
  [operation.fulfilled]: (state, action) => action.payload,
  [operations.fulfilled]: (state, action) => action.payload,

});

export default operationReducer;
