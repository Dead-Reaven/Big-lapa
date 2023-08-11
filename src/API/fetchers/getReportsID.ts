import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/category/document'

const getReportsId = (): Promise<string[]> =>
  axios.get(url).then((res) => {
    console.log('getReportsID api called')
    return res.data
  })

export default getReportsId
