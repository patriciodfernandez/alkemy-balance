import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user"
import operationReducer from "./operation"



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        operation: operationReducer,


    },
});


export default store