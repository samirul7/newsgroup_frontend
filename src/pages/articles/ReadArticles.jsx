import { useDispatch } from 'react-redux'
import Article from './ArticleItem'
import styles from './ReadArticles.module.css'
import { useEffect, useState } from 'react'
import { setError } from '../../components/error/errorSlice'
import { fetchReadArticles } from '../../services/fetchReadArticles'

function ReadArticles() {
  const [articles, setArticles] = useState([])
  const [selectedArticles, setSelectedArticles] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const dispatch = useDispatch()
  // const articles = useSelector((store) => store.article)
  // console.log(articles)
  // const dispatch = useDispatch()

  async function fetchUserReadArticles() {
    try {
      const { data, error } = await fetchReadArticles()
      if (error) throw new Error(error)
      setArticles(data)
      setSelectedArticles(data)
    } catch (ex) {
      dispatch(setError(ex.message))
    }
  }

  useEffect(() => {
    fetchUserReadArticles()
  }, [])

  function handleChange(e) {
    const { value } = e.target
    setSearchQuery(value)

    if (value.trim() === '') return setSelectedArticles(articles)

    const words = value
      .toLowerCase()
      .split(' ')
      .filter((word) => word !== '')

    const selectedArticles = articles.filter(({ title }) =>
      words.some((word) => title.toLowerCase().includes(word))
    )
    setSelectedArticles(selectedArticles)
  }

  console.log(selectedArticles)
  // return <div>Hello</div>

  return (
    <main className={styles.container}>
      <form className={styles.form}>
        <label htmlFor='search'>Search</label>
        <input
          id='search'
          className={styles.search}
          type='text'
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
      <ul className={styles.articles}>
        {selectedArticles.map((article) => (
          <Article key={article._id} article={article} />
        ))}
      </ul>
    </main>
  )
}

export default ReadArticles
