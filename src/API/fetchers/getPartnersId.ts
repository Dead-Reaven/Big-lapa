import axios from 'axios'

const url = `https://sore-tan-perch-tutu.cyclic.app/api/files/category/Logo`

type GetPartnersIdResponse = { Url: string; name: string }

const getPartnersId = (): Promise<string[]> =>
  axios.get(url).then((res) => {
    console.log('getPartnersId called')

    const mappedIds: string[] = res.data.map((el: GetPartnersIdResponse) => el.Url)

    return mappedIds
  })

export default getPartnersId
