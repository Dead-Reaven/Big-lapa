import axios from 'axios'
import domen from '../domen'

const deletePartner = (id: string) =>
  axios
    .delete(`${domen}/api/files/` + id)
    .then((res) => {
      console.log('deletePartner api call')
      res.data
    })
    .catch(() => console.log({ id }))

export default deletePartner
