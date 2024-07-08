import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("products", async (args,{rejectWithValue})=> {

    try{
        const response = await fetch("https://child.onrender.com/api/sciencefiction")
        const result = response.json();
        return result;
    }
    catch(error){
        return rejectWithValue(error.message);
    }
})

    const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
})

export const product = productSlice.reducer;