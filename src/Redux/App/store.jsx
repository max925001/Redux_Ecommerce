import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlices";
export const store = configureStore({

    reducer:{
        allCart:CartSlice
    }
})