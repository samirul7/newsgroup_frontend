import { NavLink } from 'react-router-dom'
import styles from './ArticleItem.module.css'

// const article = {
//   _id: '65c25d3687592e337885e78e',
//   title: 'First article on business',
//   category: 'business',
//   description:
//     'This is the first article that I have ever written on internet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore omnis nostrum laudantium voluptatibus non incidunt ab a, eos in, tenetur, laboriosam molestias culpa. Fugiat repellendus maxime atque repudiandae quibusdam at! Magni atque deserunt quas neque sunt blanditiis eum sequi, debitis ipsam ratione autem earum dolores tempora minus, excepturi culpa nesciunt ex et voluptatum saepe sed odio, ipsa vel. Explicabo facilis eius ipsam? Hic repudiandae quaerat minima sapiente architecto, ex dicta nihil eveniet saepe a molestiae autem aliquid atque doloribus placeat aut animi sunt ab dolore maiores aliquam sint facilis? Sunt, laboriosam sed fugit eaque quis pariatur consequuntur officiis, veritatis perferendis illo a saepe quia neque architecto excepturi est fuga magni numquam molestias necessitatibus odit. Nobis neque quidem excepturi rerum cupiditate at quisquam necessitatibus porro provident repellat consequatur esse cum nihil pariatur, consequuntur facilis, harum omnis voluptates ab quam? Provident quod maiores, ex debitis officiis labore, aut a incidunt ea ut nihil temporibus nostrum quasi. Asperiores veritatis nihil nam velit dolorem consequatur ipsum itaque minima, quidem quibusdam doloribus magnam quam qui culpa nesciunt vero accusantium quaerat aliquam consequuntur impedit? Harum, eum totam. Necessitatibus cum aut quaerat, accusantium reprehenderit ipsum mollitia velit dolorum labore, voluptate alias dolor libero eligendi suscipit quis doloribus molestiae, harum adipisci quae omnis fugit molestias? Dignissimos consectetur, saepe odio quidem, provident temporibus laborum corporis illum beatae sequi mollitia animi explicabo soluta natus, voluptatem labore voluptates et dolores quibusdam! Quaerat eius nostrum doloribus commodi saepe perferendis culpa vitae modi, quod inventore esse hic ducimus assumenda soluta veniam. Sapiente doloremque officia quia magni animi velit modi, provident odio at quod natus! Quis voluptate sint fugiat facilis qui soluta voluptatem tempora numquam id libero nesciunt nobis et, odio mollitia perferendis recusandae? Ab nostrum, aut architecto praesentium incidunt sapiente aperiam voluptas veniam rerum labore itaque harum dolorum odit iure sequi quo esse.',
//   views: 10,
//   numRatings: 6,
//   ratings: 4.2526252,
//   imgUrl: 'https://images.unsplash.com/photo-1665686306574-1ace09918530',
// }

// _id, category, description, imgUrl, numRatings, ratings, title, views
// function Article({ article }) {
function Article({ article }) {
  // console.log(article)
  // return <div>HELlo</div>
  return (
    <article className={styles.article}>
      <div>
        <img
          className={styles.image}
          alt={article.title}
          src={article.imgUrl}
        />
        <span className={styles.category}>{article.category.name}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{article.description}</p>
        <div className={styles.item_footer}>
          <div className={styles.item_footer__left}>
            <span className={styles.views}>
              {/* <i className='fa fa-eye' /> {article.views || 10} */}
            </span>
            <span className={styles.ratings}>
              {/* <i className='fa fa-star' />{' '} */}
              {/* {article.ratings?.toString()?.substring(0, 4) || 4.25} */}
            </span>
          </div>
          <div className={styles.item_footer__right}>
            <NavLink
              to={`/articles/${article._id}`}
              className={styles.article_button}
            >
              Learn More...
            </NavLink>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Article
