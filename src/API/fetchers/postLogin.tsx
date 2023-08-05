import axios from 'axios'
import { loginTypes } from '../types/types'

const url = 'https://big-lapa-api-production.up.railway.app/api/auth/login'
const headers = {
  'Content-Type': 'application/json',
}

const useLogin = (data: loginTypes) => {
  const postData = async () => {
    await axios
      .post(url, data, { headers })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('access_token', res.data.access_token)
      })
      .catch((error) => {
        console.log('Error: ', error)
        data.setWorning(error.message)
      })
  }
  postData()
  return
}

export default useLogin
