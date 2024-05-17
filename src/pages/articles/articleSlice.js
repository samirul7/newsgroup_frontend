import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticles(state, action) {
      return action.payload
    },
  },
})

export default articleSlice.reducer

export const { setArticles } = articleSlice.actions
