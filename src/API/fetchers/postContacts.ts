import axios from 'axios'
import { ContactTypes } from '../types'

const postContacts = (data: ContactTypes): Promise<any> =>
  axios
    .post('https://big-lapa-api-production.up.railway.app/api/main/create', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post succeseful called')
      res.data
    })

export default postContacts
