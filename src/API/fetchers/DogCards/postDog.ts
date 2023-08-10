import axios from 'axios'
import { SingleDogType } from '../../types'

const postDog = (data: SingleDogType): Promise<any> =>
  axios
    .post('https://big-lapa-api-production.up.railway.app/api/dog-cards', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Post successfully called')
      res.data
    })

export default postDog
