import { useDispatch, useSelector } from 'react-redux'
import Article from './ArticleItem'
import styles from './Articles.module.css'
import { useEffect, useState } from 'react'
import { fetchArticles } from '../../services/fetchArticles'
import { setError } from '../../components/error/errorSlice'
import { useNavigate } from 'react-router-dom'

// const articles = [
//   {
//     _id: '65c25d3687592e337885e78e',
//     title: 'First article on business',
//     category: 'business',
//     description:
//       'This is the first article that I have ever written on internet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis nostrum laudantium voluptatibus non incidunt ab a, eos in, tenetur, laboriosam molestias culpa. Fugiat repellendus maxime atque repudiandae quibusdam at! Magni atque deserunt quas neque sunt blanditiis eum sequi, debitis ipsam ratione autem earum dolores tempora minus, excepturi culpa nesciunt ex et voluptatum saepe sed odio, ipsa vel. Explicabo facilis eius ipsam? Hic repudiandae quaerat minima sapiente architecto, ex dicta nihil eveniet saepe a molestiae autem aliquid atque doloribus placeat aut animi sunt ab dolore maiores aliquam sint facilis? Sunt, laboriosam sed fugit eaque quis pariatur consequuntur officiis, veritatis perferendis illo a saepe quia neque architecto excepturi est fuga magni numquam molestias necessitatibus odit. Nobis neque quidem excepturi rerum cupiditate at quisquam necessitatibus porro provident repellat consequatur esse cum nihil pariatur, consequuntur facilis, harum omnis voluptates ab quam? Provident quod maiores, ex debitis officiis labore, aut a incidunt ea ut nihil temporibus nostrum quasi. Asperiores veritatis nihil nam velit dolorem consequatur ipsum itaque minima, quidem quibusdam doloribus magnam quam qui culpa nesciunt vero accusantium quaerat aliquam consequuntur impedit? Harum, eum totam. Necessitatibus cum aut quaerat, accusantium reprehenderit ipsum mollitia velit dolorum labore, voluptate alias dolor libero eligendi suscipit quis doloribus molestiae, harum adipisci quae omnis fugit molestias? Dignissimos consectetur, saepe odio quidem, provident temporibus laborum corporis illum beatae sequi mollitia animi explicabo soluta natus, voluptatem labore voluptates et dolores quibusdam! Quaerat eius nostrum doloribus commodi saepe perferendis culpa vitae modi, quod inventore esse hic ducimus assumenda soluta veniam. Sapiente doloremque officia quia magni animi velit modi, provident odio at quod natus! Quis voluptate sint fugiat facilis qui soluta voluptatem tempora numquam id libero nesciunt nobis et, odio mollitia perferendis recusandae? Ab nostrum, aut architecto praesentium incidunt sapiente aperiam voluptas veniam rerum labore itaque harum dolorum odit iure sequi quo esse.',
//     views: { $numberInt: '10' },
//     numRatings: { $numberInt: '6' },
//     ratings: { $numberDouble: '4.2526252' },
//     imgUrl: 'https://images.unsplash.com/photo-1665686306574-1ace09918530',
//   },
//   {
//     _id: '65c25d3687592e337885e78f',
//     title: 'First article on general',
//     category: 'general',
//     description:
//       'This is the first article on general that I have ever written on internet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis nostrum laudantium voluptatibus non incidunt ab a, eos in, tenetur, laboriosam molestias culpa. Fugiat repellendus maxime atque repudiandae quibusdam at! Magni atque deserunt quas neque sunt blanditiis eum sequi, debitis ipsam ratione autem earum dolores tempora minus, excepturi culpa nesciunt ex et voluptatum saepe sed odio, ipsa vel. Explicabo facilis eius ipsam? Hic repudiandae quaerat minima sapiente architecto, ex dicta nihil eveniet saepe a molestiae autem aliquid atque doloribus placeat aut animi sunt ab dolore maiores aliquam sint facilis? Sunt, laboriosam sed fugit eaque quis pariatur consequuntur officiis, veritatis perferendis illo a saepe quia neque architecto excepturi est fuga magni numquam molestias necessitatibus odit. Nobis neque quidem excepturi rerum cupiditate at quisquam necessitatibus porro provident repellat consequatur esse cum nihil pariatur, consequuntur facilis, harum omnis voluptates ab quam? Provident quod maiores, ex debitis officiis labore, aut a incidunt ea ut nihil temporibus nostrum quasi. Asperiores veritatis nihil nam velit dolorem consequatur ipsum itaque minima, quidem quibusdam doloribus magnam quam qui culpa nesciunt vero accusantium quaerat aliquam consequuntur impedit? Harum, eum totam. Necessitatibus cum aut quaerat, accusantium reprehenderit ipsum mollitia velit dolorum labore, voluptate alias dolor libero eligendi suscipit quis doloribus molestiae, harum adipisci quae omnis fugit molestias? Dignissimos consectetur, saepe odio quidem, provident temporibus laborum corporis illum beatae sequi mollitia animi explicabo soluta natus, voluptatem labore voluptates et dolores quibusdam! Quaerat eius nostrum doloribus commodi saepe perferendis culpa vitae modi, quod inventore esse hic ducimus assumenda soluta veniam. Sapiente doloremque officia quia magni animi velit modi, provident odio at quod natus! Quis voluptate sint fugiat facilis qui soluta voluptatem tempora numquam id libero nesciunt nobis et, odio mollitia perferendis recusandae? Ab nostrum, aut architecto praesentium incidunt sapiente aperiam voluptas veniam rerum labore itaque harum dolorum odit iure sequi quo esse.',
//     views: { $numberInt: '10' },
//     numRatings: { $numberInt: '6' },
//     ratings: { $numberDouble: '4.2526252' },
//     imgUrl: 'https://images.unsplash.com/photo-1665686306574-1ace09918530',
//   },
//   { _id: 1 },
//   { _id: 2 },
//   { _id: 3 },
//   { _id: 4 },
//   { _id: 5 },
//   { _id: 6 },
//   { _id: 7 },
//   { _id: 8 },
//   { _id: 9 },
//   { _id: 10 },
//   { _id: 12 },
//   { _id: 13 },
//   { _id: 14 },
//   { _id: 15 },
// ]

// const BASE_URL = 'http://localhost:5000'

function Articles() {
  const [articles, setArticles] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const articles = useSelector((store) => store.article)
  // console.log(articles)
  // const dispatch = useDispatch()

  async function fetchUserArticles() {
    try {
      const { data, error } = await fetchArticles()
      if (error) throw new Error(error)
      setArticles(data)
    } catch (ex) {
      dispatch(setError(ex.message))
    }
  }

  useEffect(() => {
    fetchUserArticles()
  }, [])

  // return <div>Hello</div>

  if (articles.length === 0)
    return (
      <div className={styles.message_container}>
        <p>Please subscribe to newsgroup to get articles.</p>
        <p>
          Click{' '}
          <button
            className={styles.message_button}
            onClick={() => navigate('/profile')}
          >
            here{' '}
          </button>{' '}
          to subscribe to articles
        </p>
      </div>
    )
  return (
    <main>
      <ul className={styles.articles}>
        {articles.map((article) => (
          <Article key={article._id} article={article} />
        ))}
      </ul>
    </main>
  )
}

export default Articles
