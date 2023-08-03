import axios from 'axios'

const url = 'https://big-lapa-api-production.up.railway.app/api/images'

const postPartners = async (data: File) => {
  const description = 'Optional description here'
  const category = 'Logo'

  const formData = new FormData()
  formData.append('image', data)
  formData.append('description', description)
  formData.append('category', category)

  return axios
    .post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('post partner successfully called')
      return res.data
    })
}

export default postPartners
