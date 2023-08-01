interface AdminPatch {
  passwordOld: string
  passwordNew: string
}

function usePatch(updateData: AdminPatch) {
  const token = localStorage.getItem('access_token')
  const patchData = async () => {
    try {
      const response = await fetch(
        'https://big-lapa-api-production.up.railway.app/api/auth/change-password',
        {
          method: 'PATCH',
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        },
      )
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData, 'data')
      } else if (!response.ok) {
        console.log(response.status)
      }
    } catch (error) {
      console.log('123', error)
    }
  }
  patchData()
  return
}

export default usePatch
