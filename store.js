import { configureStore } from '@reduxjs/toolkit'
import userReducer from './src/pages/user/userSlice'
import articleReducer from './src/pages/articles/articleSlice'
import errorReducer from './src/components/error/errorSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
    error: errorReducer,
  },
})

export default store
