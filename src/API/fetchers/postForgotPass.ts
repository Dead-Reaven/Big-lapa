import axios from 'axios'
import domen from '../domen'
import { IForgotPass } from '../types'

const headers = {
  'Content-Type': 'application/json',
}

const postForgotPass = async (data: IForgotPass): Promise<any> => {
  await axios.post(`${domen}/api/auth/forgot-password`, data, { headers }).then((res) => {
    return res.data
  })
}

export default postForgotPass
