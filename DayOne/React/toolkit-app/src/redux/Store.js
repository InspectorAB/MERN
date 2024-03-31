import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/AppReducer";
import AuthReducer from "./reducers/AuthReducer";

export default configureStore({
    reducer:{
        counter:counterReducer,
        auth:AuthReducer
    }
})