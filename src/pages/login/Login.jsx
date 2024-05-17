import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setError } from '../../components/error/errorSlice'
import login from '../../services/login'
import { getIsLogin, setUser } from '../user/userSlice'

function Login() {
  const navigate = useNavigate()
  const isLogin = useSelector(getIsLogin)
  useEffect(() => {
    if (isLogin === true) navigate('/')
  }, [isLogin])

  const [{ email, password }, setUserInfo] = useState({})

  const dispatch = useDispatch()

  async function loginUser(email, password) {
    const res = await login(email, password)

    if (res?.error) dispatch(setError(res.error))
    else dispatch(setUser(res))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password)
      return dispatch(setError('Username or Password cannot be empty'))

    loginUser(email, password)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setUserInfo((state) => ({ ...state, [name]: value }))
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.titleContainer}>
            <h4>Login</h4>
          </div>
          <div className={styles.gridLayout}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              value={email}
            />
            <label htmlFor='pwd'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className={styles.login__footer}>
            <button className={styles.loginButton}>Login</button>
            <p className={styles.footer__text}>
              Don&apos;t have an account?
              <br /> Click{' '}
              <NavLink to='/signup' className={styles.btn_text}>
                {' '}
                Here
              </NavLink>{' '}
              to Sign Up.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
