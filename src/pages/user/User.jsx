import { useSelector } from 'react-redux'
import styles from './User.module.css'
import UserProfile from './UserProfile'
import Subscribe from './Subscribe'

function User() {
  const user = useSelector((store) => store.user)
  // console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.newsgroup}>
        <Subscribe />
      </div>
      <div className={styles.userProfile}>
        <UserProfile />
      </div>
    </div>
  )
}

export default User
