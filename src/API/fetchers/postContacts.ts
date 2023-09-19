import axios from 'axios'
import domen from '../domen'
import { ContactTypes } from '../types'

const postContacts = (data: ContactTypes): Promise<any> =>
  axios
    .post(`${domen}/api/main/create`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post successfully called')
      res.data
    })

export default postContacts
