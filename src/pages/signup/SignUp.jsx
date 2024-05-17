import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SignUp.module.css'
import { useState } from 'react'
import axios from 'axios'
import { setError } from '../../components/error/errorSlice'
import { SIGN_UP_URL } from '../../services/config'

function SignUp() {
  const navigate = useNavigate()
  const [{ name, email, password }, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

  // const user = useSelector((store) => store.user)

  const dispatch = useDispatch()

  async function createUser(name, email, password) {
    try {
      const response = await axios.post(SIGN_UP_URL, {
        name,
        email,
        password,
      })
      if (response.status === 200) {
        navigate('/login')
        window.alert('User Created Successfully')
      } else throw new Error('Something went wrong. Contact website admin.')
    } catch (ex) {
      console.log(ex)
      window.alert(ex.message)
      dispatch(setError(ex?.response?.data || ex.message))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !email || !password) {
      dispatch(setError("Name or Email or Password can't be empty"))
      return
    }
    createUser(name, email, password)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  return (
    <div className={styles.signUpContainer}>
      <div className={styles.signUp}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.titleContainer}>
            <h4>SignUp</h4>
          </div>
          <div className={styles.gridLayout}>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='name'
              id='name'
              onChange={handleChange}
              value={name}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
              value={email}
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className={styles.signUp__footer}>
            <button className={styles.signUpButton}>signUp</button>
            <p className={styles.footer__text}>
              Already have an account?
              <br /> Click
              <NavLink to='/login' className={styles.btn_text}>
                {' '}
                Here{' '}
              </NavLink>
              to Login.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
