import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL

export async function signIn(payload) {
  try {
    const response = await axios.post(`${apiUrl}/auth/signIn`, payload)
    return response
  } catch (error) {
    throw error
  }
}
