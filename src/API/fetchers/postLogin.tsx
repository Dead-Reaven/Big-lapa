import axios from 'axios'
import { LoginType } from '../types'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/auth/login'
const headers = {
  'Content-Type': 'application/json',
}

const useLogin = async (data: LoginType): Promise<any> => {
  await axios.post(url, data, { headers }).then((res) => {
    localStorage.setItem('access_token', res.data.access_token)
    const responseEmail = JSON.parse(res.config.data)
    const email = responseEmail.login
    localStorage.setItem('user_name', email)
    return res.data
  })
}

export default useLogin
