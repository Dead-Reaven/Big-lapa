import axios from 'axios'
import domen from '../../domen'

const baseUrl = `${domen}/api/dog-cards`

const deleteDog = (id: string) =>
  axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => {
      console.log('delete dog api call')
      res.data
    })
    .catch(() => console.log({ id }))

export default deleteDog
