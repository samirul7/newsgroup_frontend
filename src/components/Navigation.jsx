import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Navigation.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { getIsAdmin, getIsLogin, resetUser } from '../pages/user/userSlice'

function Navigation() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAdmin = useSelector(getIsAdmin)
  const isLogin = useSelector(getIsLogin)

  function logoutUser() {
    localStorage.removeItem('token')
    navigate('/')
    dispatch(resetUser({}))
  }

  return (
    <nav className={styles.navigation}>
      <ul>
        <li className={styles.logo}>
          <NavLink to='/'>NewsNow</NavLink>
        </li>

        {isLogin && !isAdmin && (
          <li>
            <NavLink to='/articles/read'>Archive Articles</NavLink>
          </li>
        )}
        {isLogin && (
          <>
            <li>
              <NavLink to='/articles'>Articles</NavLink>
            </li>
            <li>
              <NavLink to='/profile'>Account</NavLink>
            </li>
          </>
        )}
        {isAdmin && (
          <li>
            <NavLink to='create-article'>Create Article</NavLink>
          </li>
        )}
        {isLogin ? (
          <li>
            <Button onClick={logoutUser}>Logout</Button>
          </li>
        ) : (
          <li>
            <NavLink to='/login'>Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
