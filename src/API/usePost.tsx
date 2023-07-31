import axios from 'axios'
import { ContactTypes } from './types'

type select = 'contacts' | 'partners'
type data = ContactTypes | IMGFile | string
type action = 'delete' | 'post'
type IMGFile = File

function usePost(select: select, data: data, action: action = 'post') {
  const postData = async () => {
    if (select === 'contacts') {
      try {
        const response = await fetch(
          'https://big-lapa-api-production.up.railway.app/api/main/create',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        )

        if (response.ok) {
          const responseData = await response.json()
          console.log(responseData)
        } else {
          console.error('Error:', response.status)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    if (select === 'partners' && action === 'post') {
      const url = 'https://big-lapa-api-production.up.railway.app/api/images'
      const description = 'Optional description here'
      const category = 'Logo'

      const formData = new FormData()
      formData.append('image', data as IMGFile)
      formData.append('description', description)
      formData.append('category', category)

      const response = await axios.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log('Image uploaded successfully!', response.data)
    }

    if (select === 'partners' && action === 'delete') {
      const url = `https://big-lapa-api-production.up.railway.app/api/images/${
        data as string
      }`

      const response = await axios.delete(url)
      if (response.status) console.log('Image deleted succesefully', response.data)
    }
  }

  postData()
  return
}

export default usePost
