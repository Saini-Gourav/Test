import { configureStore } from "@reduxjs/toolkit";
import { product } from "./Product";


export const store = configureStore({
    reducer: {
        data:product,
    },
})