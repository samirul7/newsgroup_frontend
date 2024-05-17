import styles from './Subscribe.module.css'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { useDispatch } from 'react-redux'
import {
  fetchAllCategory,
  fetchUserCategory,
} from '../../services/fetchCategory'
import { handleCategorySubscription } from '../../services/handleCategorySubscription'
import { setError } from '../../components/error/errorSlice'

function Subscribe() {
  const dispatch = useDispatch()

  const [subscribedCategories, setSubscribedCategories] = useState([])
  const [remainingCategories, setRemainingCategories] = useState([])
  const [syncCategories, setSyncCategories] = useState(false)

  async function fetchCategory() {
    const allCategories = await fetchAllCategory()
    const userCategories = await fetchUserCategory()
    setSubscribedCategories(userCategories)
    const subCateIds = userCategories.map((category) => category._id)
    const categories = allCategories.filter(
      (category) => !subCateIds.includes(category._id)
    )
    setRemainingCategories(categories)
  }

  useEffect(() => {
    fetchCategory()
  }, [syncCategories])

  async function handleSubscription(categoryId, type) {
    const { message, error } = await handleCategorySubscription(
      categoryId,
      type
    )

    if (message) setSyncCategories((state) => !state)
    if (error) dispatch(setError(error))
  }

  return (
    <div className={styles.category}>
      <div className={styles.subscribe}>
        <h3 className={styles.heading}>Subscribe to get articles</h3>
        <ul className={styles.list}>
          {remainingCategories.map((category) => (
            <li className={styles.item} key={category._id}>
              <p>{category.name}</p>
              <Button onClick={() => handleSubscription(category._id, 'add')}>
                Subscribe
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.unsubscribe}>
        <h3 className={styles.heading}>Unsubscribe</h3>
        <ul className={styles.list}>
          {subscribedCategories.map((category) => (
            <li className={styles.item} key={category._id}>
              <p>{category.name}</p>
              <Button
                onClick={() => handleSubscription(category._id, 'remove')}
              >
                Unsubscribe
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Subscribe
