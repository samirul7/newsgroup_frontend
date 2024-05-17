import axios from 'axios'
import { fetchUserCategory } from './fetchCategory'
import { ARTICLE_API_URL } from './config'

export async function fetchArticles() {
  try {
    const userCategoryIds = (await fetchUserCategory()).map(
      (category) => category._id
    )

    const response = await axios.get(ARTICLE_API_URL, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
      params: {
        articles: userCategoryIds,
        // [
        //   '65eaea5c8223ec8bc938da32',
        //   '65eaea5c8223ec8bc938da34',
        //   '65eaea5c8223ec8bc938da35',
        // ],
      },
    })

    return { data: response.data }
  } catch (ex) {
    console.log(ex)
    return { error: ex?.response?.data || ex.message }
  }
}
