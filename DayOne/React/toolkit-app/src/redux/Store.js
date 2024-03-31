import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/AppReducer";

export default configureStore({
    reducer:{
        counter:counterReducer
    }
})