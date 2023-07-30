import { ContactTypes } from './types'

type select = 'contacts' | 'partners'

type IMGFile = File

function usePost(select: select, data: ContactTypes | IMGFile) {
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

    if (select === 'partners') {
      const description = 'Optional description here'
      const category = 'Logo'
      const url = 'https://big-lapa-api-production.up.railway.app/api/images'

      const formData = new FormData()
      formData.append('image', data as IMGFile)
      formData.append('description', description)
      formData.append('category', category)

      console.log({ data })

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log({ response })
    }
  }

  postData()
  return
}

export default usePost
