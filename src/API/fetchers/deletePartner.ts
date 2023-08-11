import axios from 'axios'
//В разработке Api
const url = `https://sore-tan-perch-tutu.cyclic.app/api/images/`

const deletePartner = (id: string) =>
  axios.delete(url + id).then((res) => {
    console.log('deletePartner api call')
    res.data
  })

export default deletePartner
