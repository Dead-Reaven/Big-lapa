import axios from 'axios'

const url = ' https://big-lapa-api-production.up.railway.app/api/images/documents'

const postReport = (data: File): Promise<any> => {
  const formData = new FormData()
  formData.append('document', data)
  formData.append('description', File.name)
  formData.append('category', 'Doc')

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
