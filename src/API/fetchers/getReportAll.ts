import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/category/document'

const getReportAll = (): Promise<any[]> =>
  axios.get(url).then((res) => {
    console.log(res.data, 'Hello')

    return res.data
  })

export default getReportAll
