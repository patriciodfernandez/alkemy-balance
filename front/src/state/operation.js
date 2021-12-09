import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const operation = createAsyncThunk("OPERATION_REQUEST", (data) => {
  return axios
    .post("http://localhost:8080/api/operations", data)
    .then((respuesta) => []);
});

export const operations = createAsyncThunk("OPERATIONS_GET", () => {
  return axios.get("http://localhost:8080/api/operations").then((r) => r.data);
});

export const getOne = createAsyncThunk("GET_ONE_OPERATION", (id) => {
  return axios
    .get(`http://localhost:8080/api/operations/${id}`)
    .then((res) => res.data);
});
export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", (id) => {
  /*En algun lugar de la data tiene que venir el id para encontrar la ruta*/
  return axios
    .delete(`http://localhost:8080/api/operations/${id}`)
    .then((respuesta) => respuesta.data);
});
const operationReducer = createReducer([], {
  [operation.fulfilled]: (state, action) => action.payload,
  [operations.fulfilled]: (state, action) => action.payload,
  [getOne.fulfilled]: (state, action) => [action.payload],
  [deleteProduct.fulfilled]: (state, action) => action.payload, 
});


export default operationReducer;
