import axios from 'axios'
import domen from '../../domen'

const url = `${domen}/api/files/category/`

type GetDogImageResponse = { Url: string; name: string }

const getDogImages = (category: string): Promise<string[]> =>
  axios.get(`${url}/${category}`).then((res) => {
    console.log('getDogImages called')

    const mappedIds: string[] = res.data.map((el: GetDogImageResponse) => el.Url)

    return mappedIds
  })

export default getDogImages
