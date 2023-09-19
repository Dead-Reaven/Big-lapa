import axios from 'axios'
import domen from '../domen'

const deleteReport = (id: string): Promise<any> => {
  return axios.delete(`${domen}/api/files/` + id).then((res) => {
    console.log('Delete report successfully called')
    return res.data
  })
}
export default deleteReport
