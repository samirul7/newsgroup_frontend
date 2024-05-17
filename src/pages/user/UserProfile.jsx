import { useSelector } from 'react-redux'
import styles from './UserProfile.module.css'

// const user = {
//   name: 'Md Samirul Islam',
//   email: 'test@test.com',
//   pwd: 'test_test',
// }

function UserProfile() {
  const user = useSelector((store) => store.user)
  // console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.name}>Name: {user.name}</p>
        <p className={styles.email}>Email: {user.email}</p>
      </div>
    </div>
  )
}

export default UserProfile
