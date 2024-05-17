import axios from 'axios'
import { CATEGORY_API_URL, CATEGORY_API_USER_URL } from './config'

export async function fetchAllCategory() {
  try {
    const response = await axios.get(CATEGORY_API_URL, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    return response.data
  } catch (ex) {
    return { error: ex?.response?.data || ex.message }
  }
}

export async function fetchUserCategory() {
  try {
    const response = await axios.get(CATEGORY_API_USER_URL, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    })
    return response.data.subscribedCategory
  } catch (ex) {
    return { error: ex?.response?.data || ex.message }
  }
}
