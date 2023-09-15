import axios from 'axios'
import { DogType } from '../../types'
import domen from '../../domen'

const postDog = (data: DogType): Promise<any> =>
  axios
    .post(`${domen}/api/dog-cards`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post dog successfully called')
      console.log(`---data: ${data} ---`, `\n---id: ${data._id}---`)
      console.log('response post:', res.data)
      return res.data
    })

export default postDog
