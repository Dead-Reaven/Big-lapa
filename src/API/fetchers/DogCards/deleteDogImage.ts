import axios from 'axios'
//В разработке Api
const url = `https://sore-tan-perch-tutu.cyclic.app/api/files/`

const deleteDogImage = (id: string) =>
  axios
    .delete(url + id)
    .then((res) => {
      console.log('deleteDogImage call')
      res.data
    })
    .catch(() => console.log({ id }))

export default deleteDogImage
