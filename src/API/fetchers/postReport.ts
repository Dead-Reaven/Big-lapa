import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/documents'

const postReport = (data: File): Promise<any> => {
  const formData = new FormData()
  formData.append('document', data)

  return axios
    .post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('postReport successfully called')
      return res.data
    })
}
export default postReport
