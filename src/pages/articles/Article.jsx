import { useEffect, useState } from 'react'
import styles from './Article.module.css'
import { useParams } from 'react-router-dom'
import { fetchArticle } from '../../services/fetchArticle'
import Button from '../../components/Button'
import axios from 'axios'
import { ARTICLE_API_URL } from '../../services/config'
import { useSelector } from 'react-redux'
import { getIsAdmin } from '../user/userSlice'

// const initialState = {
//   title: '',
//   description: '',
//   imgUrl: '',
//   isRead: true,
// }

function Article() {
  const { id } = useParams()
  const [article, setArticle] = useState({})
  const isAdmin = useSelector(getIsAdmin)

  console.log(article)
  async function fetchOneArticle() {
    const {
      data: {
        category: { name: category },
        description,
        imgUrl,
        isRead,
        title,
      },
    } = await fetchArticle(id)
    console.log('category', category)
    // console.log('fetch article', temp)
    setArticle({ category, description, imgUrl, isRead, title })
  }

  useEffect(() => {
    fetchOneArticle()
  }, [])

  async function changeMarkRead() {
    const response = await axios.post(
      `${ARTICLE_API_URL}/${id}/${article.isRead ? 'unread' : 'read'}`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    setArticle((article) => ({ ...article, isRead: !article.isRead }))
    // console.log(response)
  }

  function handleClick() {
    changeMarkRead()
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.img_container}>
          <img
            className={styles.image}
            src={article.imgUrl}
            alt={article.title}
          />
          <p className={styles.category}>{article.category}</p>
        </div>
        <h2 className={styles.title}>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
        {!isAdmin && (
          <Button onClick={handleClick} className={styles.btn}>
            {article.isRead ? 'Mark as Unread' : 'Mark as Read'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Article
