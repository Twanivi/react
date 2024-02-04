import { createSlice } from "@reduxjs/toolkit";
import { setUsers } from "../actions/users/usersActions";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      users: [...state.users, action.payload]
    }),
    deleteUser: (state, action) => ({
      ...state,
      users: state.users.filter((user) => user.id !== action.payload)
    })
  },
  extraReducers: builder => {
     builder.addCase(setUsers.fulfilled, (state, action) => ({
      ...state,
      loading: false,
        error: null,
        users: action.payload
     }))
     builder.addCase(setUsers.pending, (state) => ({
      ...state,
      loading: true
     }))
     builder.addCase(setUsers.rejected, (state, action) => ({
      ...state,
      loading: false,
        error: action.payload
     }))
  }
})

const {actions, reducer} = usersSlice

export const {addUser, deleteUser} = actions

export const userReducer = reducer

