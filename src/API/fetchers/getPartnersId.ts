import axios from 'axios'
import domen from '../domen'

type GetPartnersIdResponse = { Url: string; name: string }

const getPartnersId = (): Promise<string[]> =>
  axios.get(`${domen}/api/files/category/Logo`).then((res) => {
    console.log('getPartnersId called')

    const mappedIds: string[] = res.data.map((el: GetPartnersIdResponse) => el.Url)

    return mappedIds
  })

export default getPartnersId
