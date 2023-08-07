import axios from 'axios'

const url = 'https://big-lapa-api-production.up.railway.app/api/images/documents/'

const deleteReport = (id: string): Promise<any> => {
  return axios.delete(url + id).then((res) => {
    console.log('Delete report successfully called')
    return res.data
  })
}
export default deleteReport
