import axios from 'axios'
import { READ_ARTICLE_API_URL } from './config'

export async function fetchReadArticles() {
  try {
    const response = await axios.get(READ_ARTICLE_API_URL, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })

    return { data: response.data }
  } catch (ex) {
    console.log(ex)
    return { error: ex?.response?.data || ex.message }
  }
}
