import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/'

const deleteReport = (id: string): Promise<any> => {
  return axios.delete(url + id).then((res) => {
    console.log('Delete report successfully called')
    return res.data
  })
}
export default deleteReport
