import axios from 'axios'
import domen from '../../domen'

const url = `${domen}/api/files/images`

const postDogImages = async (data: File[] | File, category: string) => {
  const formData = new FormData()
  if (Array.isArray(data)) {
    data.forEach((photo) => {
      formData.append('images', photo)
    })
  } else {
    formData.append('images', data)
  }

  formData.append('category', category)

  return axios
    .post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => {
      console.log('post dog images successfully called')
      return res.data
    })
}

export default postDogImages
