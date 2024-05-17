import { useSelector } from 'react-redux'

import Button from '../../components/Button'
import styles from './Home.module.css'
import { getUser } from '../user/userSlice'
import { NavLink } from 'react-router-dom'

function Home() {
  const { isLogin, isAdmin } = useSelector(getUser)
  // console.log(isAdmin, isLogin)
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Find all news at one Places</h1>

        <Button type='button-primary'>
          <NavLink
            to={isLogin ? (isAdmin ? '/profile' : '/articles') : '/login'}
          >
            Get Started
          </NavLink>
        </Button>
      </div>
    </div>
  )
}

export default Home
