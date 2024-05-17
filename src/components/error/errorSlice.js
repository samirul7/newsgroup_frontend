import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: '',
}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload
    },
    resetError(state) {
      state.error = ''
    },
  },
})

export default errorSlice.reducer
export const { setError, resetError } = errorSlice.actions
