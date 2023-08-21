import axios from 'axios'
import { DogType } from '../../types'
import domen from '../../domen'

const baseUrl = `${domen}/api/dog-cards/`

const getDog = (id: string): Promise<DogType> =>
  axios.get(`${baseUrl}/${id}`).then((res) => {
    console.log('get dogs called')
    return res.data
  })

export default getDog
