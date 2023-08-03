import axios from 'axios'

const url = `https://big-lapa-api-production.up.railway.app/api/images/category/Logo`

const getPartnersId = (): Promise<string[]> =>
  axios.get(url).then((res) => {
    console.log('getPartnersId called')
    return res.data
  })

export default getPartnersId
