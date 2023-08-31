import axios from 'axios'
import { IChangePass } from '../types'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/auth/reset-password'
const headers = {
  'Content-Type': 'application/json',
}

const postChangePass = async (data: IChangePass): Promise<any> => {
  await axios.post(url, data, { headers }).then((res) => {
    return res.data
  })
}

export default postChangePass
