import axios from 'axios'

const url =
  'https://big-lapa-api-production.up.railway.app/api/images/documents/category/Doc'

const getReportsId = (): Promise<string[]> =>
  axios.get(url).then((res) => {
    console.log('getReportsID api called')
    return res.data
  })

export default getReportsId
