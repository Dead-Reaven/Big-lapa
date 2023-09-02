import axios from 'axios'
import domen from '../domen'

const getReportFile = (id: string): Promise<File> =>
  axios
    .get(`${domen}/api/files/category/document` + id, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('getReportFile api called')
      return res.data
    })

export default getReportFile
