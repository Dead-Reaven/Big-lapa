import axios from 'axios'
import domen from '../domen'

const getReportAll = (): Promise<any[]> =>
  axios.get(`${domen}/api/files/category/document`).then((res) => {
    console.log(res.data, 'Hello')

    return res.data
  })

export default getReportAll
