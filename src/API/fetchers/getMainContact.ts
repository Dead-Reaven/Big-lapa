import axios from 'axios'
import domen from '../domen'

const getMainContact = (): Promise<any> =>
  axios.get(`${domen}/api/main/get`).then((res) => {
    console.log(res.data)
    return res.data
  })

export default getMainContact
