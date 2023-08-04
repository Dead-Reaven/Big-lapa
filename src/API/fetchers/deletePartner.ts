import axios from 'axios'
const url = `https://big-lapa-api-production.up.railway.app/api/images/`

const deletePartner = (id: string) =>
  axios.delete(url + id).then((res) => {
    console.log('deletePartner api call')
    res.data
  })

export default deletePartner
