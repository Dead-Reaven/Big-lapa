import axios from 'axios'
import { DogType } from '../../types'
import domen from '../../domen'

const url = `${domen}/api/dog-cards`

const getDogs = (): Promise<DogType[]> =>
  axios.get(url).then((res) => {
    console.log('get dogs called')
    return res.data
  })

export default getDogs
