import axios from 'axios'
import { ReportTypes } from '../types'

const url = 'https://big-lapa-api-production.up.railway.app/api/images/'

const getReportFile = (id: string): Promise<File> =>
  axios
    .get(url + id, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('getReportFile api called')
      console.log({ res })
      return res.data
    })

export default getReportFile
