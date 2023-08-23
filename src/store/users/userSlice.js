import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserUrl = 'https://randomuser.me/api/?results=5';

const initialState = {
    users:[],
    isLoading: false,
    error: undefined,
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    try {
        const response = await axios.get(fetchUserUrl);
        console.log(response.data.results)
        return [...response.data.results]
    }catch (error) {
        throw error;
    }
})

const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state,action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
})

export default usersSlice.reducer;