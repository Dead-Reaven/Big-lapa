import axios from 'axios'
import domen from '../domen'
import { IChangePass } from '../types'

const headers = {
  'Content-Type': 'application/json',
}

const postChangePass = async (data: IChangePass) => {
  await axios.post(`${domen}/api/auth/reset-password`, data, { headers }).then((res) => {
    return res.data
  })
}

export default postChangePass
