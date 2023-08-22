import axios from 'axios'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/images'

const postPartners = async (data: File) => {
  const category = 'Logo'

  const formData = new FormData()
  formData.append('images', data)
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
