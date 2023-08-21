import axios from 'axios'
import { DogType } from '../../types'

const baseUrl = `https://sore-tan-perch-tutu.cyclic.app/api/dog-cards/`

const getDog = (id: string): Promise<DogType> =>
  axios.get(`${baseUrl}/${id}`).then((res) => {
    console.log('get dogs called')
    return res.data
  })

export default getDog
