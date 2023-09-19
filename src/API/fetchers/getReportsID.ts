import axios from 'axios'
import domen from '../domen'

const getReportsId = (): Promise<string[]> =>
  axios.get(`${domen}/api/files/category/document`).then((res) => {
    console.log('getReportsID api called')
    return res.data
  })

export default getReportsId
