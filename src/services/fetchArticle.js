import axios from 'axios'
import { ARTICLE_API_URL } from './config'

export async function fetchArticle(id) {
  try {
    const response = await axios.get(`${ARTICLE_API_URL}/${id}`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })

    console.log(response)

    return { data: { ...response.data, ...response.data._doc } }
  } catch (ex) {
    return { error: ex?.response?.data || ex.message }
  }
}
