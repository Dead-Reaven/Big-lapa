import axios from 'axios'
import { DogType } from '../../types'

const baseUrl = `https://sore-tan-perch-tutu.cyclic.app/api/dog-cards`

const patchDog = (data: DogType, id: string): Promise<any> =>
  axios
    .patch(`${baseUrl}/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Patch successfully called')
      console.log(res.data)

      res.data
    })
    .catch((error) => {
      console.error('error in patchDog:', error)
    })

export default patchDog
