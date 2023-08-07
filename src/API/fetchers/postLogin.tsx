import axios from 'axios'
import { LoginType } from '../types'

const url = 'https://big-lapa-api-production.up.railway.app/api/auth/login'
const headers = {
  'Content-Type': 'application/json',
}

const useLogin = async (data: LoginType): Promise<any> => {
  await axios
    .post(url, data, { headers })
    .then((res) => {
      console.log(res.data)
      localStorage.setItem('access_token', res.data.access_token)
    })
    .catch((error) => {
      console.log('Error: ', error)
      data.setIsError(error.message)
    })
}

export default useLogin
