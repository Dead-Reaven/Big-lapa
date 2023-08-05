import axios from 'axios'
import { ContactTypes } from '../types'

const fetchContacts = (): Promise<ContactTypes> =>
  axios
    .get('https://big-lapa-api-production.up.railway.app/api/main/get')
    .then((response) => {
      console.log('Contacts api call')
      return response.data
    })

export default fetchContacts
