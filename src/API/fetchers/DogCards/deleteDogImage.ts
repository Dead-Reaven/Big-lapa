import axios from 'axios'
import domen from '../../domen'
//В разработке Api
const url = `${domen}/api/files/`

const deleteDogImage = (id: string) =>
  axios
    .delete(url + id)
    .then((res) => {
      console.log('deleteDogImage call')
      res.data
    })
    .catch(() => console.log({ id }))

export default deleteDogImage
