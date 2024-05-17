import axios from 'axios'
import { CATEGORY_API_SUBSCRIPTION } from './config'

export async function handleCategorySubscription(categoryId, type) {
  try {
    const response = await axios.post(
      `${CATEGORY_API_SUBSCRIPTION}/${type}`,
      { categoryId },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    )
    return { message: response.data }
  } catch (ex) {
    return { error: ex?.response?.data || ex.message }
  }
}
