import axios from 'axios'
import { DogType } from '../../types'
import domen from '../../domen'

const baseUrl = `${domen}/api/dog-cards`

const patchDog = (data: DogType, id: string): Promise<any> =>
  axios
    .patch(`${baseUrl}/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      console.log('Patch dog successfully called')
      console.log(`---data: ${data} ---`, `\n---id: ${id}---`)
      console.log('response patch:', res.data)

      res.data
    })
    .catch((error) => {
      console.error('error in patchDog:', error)
    })

export default patchDog
