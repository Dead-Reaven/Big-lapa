import axios from 'axios'
import domen from '../domen'
import { IUserContacts } from '../types'

const headers = {
  'Content-Type': 'application/json',
}

const postMainContact = async (data: IUserContacts): Promise<any> => {
  await axios.post(`${domen}/api/email`, data, { headers }).then((res) => {
    return res.data
  })
}
export default postMainContact
