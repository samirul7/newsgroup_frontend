import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AppLayout from './ui/AppLayout'

import User from './pages/user/User'
import SignUp from './pages/signup/SignUp'
import Articles from './pages/articles/Articles'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import CreateArticle from './pages/articles/CreateArticle'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from './pages/user/userSlice'
import { tokenToLogin } from './utils/helper'
import ProtectedRoute from './components/ProtectedRoute'
import Article from './pages/articles/Article'
import ReadArticles from './pages/articles/ReadArticles'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <p>Something went wrong</p>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/articles',
        element: (
          <ProtectedRoute>
            <Articles />
          </ProtectedRoute>
        ),
      },
      {
        path: '/articles/read',
        element: (
          <ProtectedRoute>
            <ReadArticles />
          </ProtectedRoute>
        ),
      },
      {
        path: '/articles/:id',
        element: (
          <ProtectedRoute>
            <Article />
          </ProtectedRoute>
        ),
      },
      {
        path: '/create-article',
        element: (
          <ProtectedRoute>
            <CreateArticle />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/profile',
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

function App() {
  // for login persistant
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token'))
      dispatch(setUser(tokenToLogin(localStorage.getItem('token'))))
  }, [])

  return <RouterProvider router={router} />
}

export default App
