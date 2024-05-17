import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000' // api/auth

const initialState = {
  _id: '',
  isLogin: false,
  isAdmin: false,
  name: '',
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state._id = action.payload._id
      state.isLogin = action.payload.isLogin
      state.name = action.payload.name
      state.email = action.payload.email
      state.isAdmin = action.payload?.isAdmin || false
    },
    resetUser(state, action) {
      return initialState
    },
  },
})

export default userSlice.reducer

export const { setUser, resetUser } = userSlice.actions

export const getIsLogin = (store) => store.user.isLogin
export const getIsAdmin = (store) => store.user.isAdmin
export const getUser = (store) => store.user
