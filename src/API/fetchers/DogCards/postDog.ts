import axios from 'axios'
import { DogType } from '../../types'

const postDog = (data: DogType): Promise<any> =>
  axios
    .post('https://sore-tan-perch-tutu.cyclic.app/api/dog-cards', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post dog successfully called')
      return res.data
    })

export default postDog
