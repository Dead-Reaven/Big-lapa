interface Contacts {
  email: string
  first_phoneNumber: string
  second_phoneNumber: string
}

function usePost(data: Contacts) {
  const postData = async () => {
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

  postData()
  return
}

export default usePost
