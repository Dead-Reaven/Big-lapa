import axios from 'axios'
import domen from '../domen'

const postPartners = async (data: File) => {
  const category = 'Logo'

  const formData = new FormData()
  formData.append('images', data)
  formData.append('category', category)

  return axios
    .post(`${domen}/api/files/images`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('post partner successfully called')
      return res.data
    })
}

export default postPartners
