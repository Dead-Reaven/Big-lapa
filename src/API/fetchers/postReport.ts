import axios from 'axios'
import domen from '../domen'

const postReport = (data: File): Promise<any> => {
  const formData = new FormData()
  formData.append('document', data)

  return axios
    .post(`${domen}/api/files/documents`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('postReport successfully called')
      return res.data
    })
}
export default postReport
