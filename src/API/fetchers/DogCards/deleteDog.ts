import axios from 'axios'

const baseUrl = `https://sore-tan-perch-tutu.cyclic.app/api/dog-cards`

const deleteDog = (id: string) =>
  axios
    .delete(`${baseUrl}/${id}`)
    .then((res) => {
      console.log('delete dog api call')
      res.data
    })
    .catch(() => console.log({ id }))

export default deleteDog
