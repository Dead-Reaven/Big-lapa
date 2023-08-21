import axios from 'axios'
import { DogType } from '../../types'

const url = `https://sore-tan-perch-tutu.cyclic.app/api/dog-cards`

const getDogs = (): Promise<DogType[]> =>
  axios.get(url).then((res) => {
    console.log('get dogs called')
    return res.data
  })

export default getDogs
