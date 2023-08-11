import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/category/document'

const getReportFile = (id: string): Promise<File> =>
  axios
    .get(url + id, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('getReportFile api called')
      return res.data
    })

export default getReportFile
