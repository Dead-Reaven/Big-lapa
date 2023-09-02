import axios from 'axios'
import domen from '../domen'
import { ContactTypes } from '../types'

const fetchContacts = (): Promise<ContactTypes> =>
  axios.get(`${domen}/api/main/get`).then((response) => {
    console.log('Contacts api call')
    return response.data
  })

export default fetchContacts
