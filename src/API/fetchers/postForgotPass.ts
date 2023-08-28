import axios from 'axios'
import { IForgotPass } from '../types'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/auth/forgot-password'
const headers = {
  'Content-Type': 'application/json',
}

const postForgotPass = async (data: IForgotPass): Promise<any> => {
  await axios.post(url, data, { headers }).then((res) => {
    return res.data
  })
}

export default postForgotPass
