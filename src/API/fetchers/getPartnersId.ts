import axios from 'axios'

const url = `https://sore-tan-perch-tutu.cyclic.app/api/files/category/Logo`

const getPartnersId = (): Promise<string[]> =>
  axios.get(url).then((res) => {
    console.log('getPartnersId called')
    return res.data
  })

export default getPartnersId
