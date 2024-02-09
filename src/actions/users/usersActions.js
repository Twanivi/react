import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const SET_USERS = 'users/setUsers'


export const setUsers = createAsyncThunk(
    SET_USERS,
    async (args, {rejectWithValue}) => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        try {
            const {data} = await axios.get(apiUrl)
            return data
        } catch(error) {
               return rejectWithValue(error.message);
            }
    }
)