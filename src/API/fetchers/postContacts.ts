import axios from 'axios'
import { ContactTypes } from '../types'

const postContacts = (data: ContactTypes): Promise<any> =>
  axios
    .post('https://sore-tan-perch-tutu.cyclic.app/api/main/create', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post successfully called')
      res.data
    })

export default postContacts
