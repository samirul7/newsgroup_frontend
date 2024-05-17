import { useEffect, useState } from 'react'
import styles from './CreateArticle.module.css'
import Button from '../../components/Button'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function CreateArticle() {
  const [{ title, category, description, imgUrl }, setState] = useState({})

  const [categories, setCategories] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    ;(async function () {
      try {
        const response = await axios.get(`${BASE_URL}/api/categories`, {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        })
        setCategories(response.data)
        // console.log(response)
      } catch (ex) {
        console.log(ex)
      }
    })()
  }, [setCategories])

  async function createArticle(article) {
    try {
      const response = await axios.post(`${BASE_URL}/api/articles`, article, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      })
      console.log(response.data.message)
    } catch (ex) {
      console.log(ex)
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setState((state) => ({ ...state, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!title || !category || !description || !imgUrl) {
      setErrorMessage("Title, Category, Descripton or Image Url can't be empty")
      return
    }
    createArticle({ title, category, description, imgUrl })
    setState({ title: '', category: '', description: '', imgUrl: '' })
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault()
    }
  }

  return (
    <div className={styles.article}>
      <h2>Fill the details</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_input}>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            name='title'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={title}
            type='text'
          />

          <label htmlFor='category'>Category</label>
          <select id='category' name='category' onChange={handleChange}>
            <option value=''>--Please choose an option--</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            name='description'
            onChange={handleChange}
            value={description}
            rows='3'
          />

          <label htmlFor='imgUrl'>Image Url</label>
          <input
            id='imgUrl'
            name='imgUrl'
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={imgUrl}
            type='text'
          />
        </div>
        <div className={styles.btn_container}>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default CreateArticle
