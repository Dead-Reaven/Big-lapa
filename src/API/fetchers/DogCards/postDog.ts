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
      return res.data
    })

export default postDog
