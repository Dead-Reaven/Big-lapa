import axios from 'axios'
import domen from '../domen'
import { IEmailUser } from '../types'

const headers = {
  'Content-Type': 'application/json',
}

const useLogin = async (data: IEmailUser): Promise<any> => {
  await axios.post(`${domen}/api/auth/login`, data, { headers }).then((res) => {
    localStorage.setItem('access_token', res.data.access_token)
    const responseEmail = JSON.parse(res.config.data)
    const email = responseEmail.login
    localStorage.setItem('user_name', email)
    return res.data
  })
}

export default useLogin
