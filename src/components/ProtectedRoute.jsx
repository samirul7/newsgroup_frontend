import { useSelector } from 'react-redux'
import { getIsLogin } from '../pages/user/userSlice'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const isLogin = useSelector(getIsLogin)
  if (!isLogin) return <Navigate to='/login' replace />

  return children
}

export default ProtectedRoute
