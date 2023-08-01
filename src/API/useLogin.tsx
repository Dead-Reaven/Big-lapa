import { AdminLogin } from './adminTypes'

const useLogin = (data: AdminLogin) => {
  const postData = async () => {
    try {
      const response = await fetch(
        'https://big-lapa-api-production.up.railway.app/api/auth/login',
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
        localStorage.setItem('access_token', responseData.access_token)
      } else if (!response.ok) {
        console.log(response.status)
      }
    } catch (error) {
      console.log('123', error)
    }
  }
  postData()
  return
}

export default useLogin
