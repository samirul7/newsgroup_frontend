import axios from 'axios'
import { tokenToLogin } from '../utils/helper'
import { AUTH_API_URL } from './config'

export default async function login(email, password) {
  try {
    const response = await axios.post(AUTH_API_URL, {
      email,
      password,
    })

    if (response.status !== 200) throw new Error('Something went wrong')

    localStorage.setItem('token', response.data)

    return tokenToLogin(response.data)
  } catch (ex) {
    return { error: ex?.response?.data || ex.message }
  }
}
