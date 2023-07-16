import React, { useEffect, useState } from 'react'

interface Contacts {
  email: string
  first_phoneNumber: string
  second_phoneNumber: string
}

type Select = 'contacts'
type Type = 'get' | 'post'

function useApi(select: Select, type: Type) {
  const [state, setState] = useState<Contacts>()

  useEffect(() => {
    if (select === 'contacts') {
      if (type === 'get') {
        const getData = async (handleSetState: React.Dispatch<Contacts>) => {
          const response = await fetch(
            'https://big-lapa-api-production.up.railway.app/api/main/get',
          )
          const data = await response.json()
          handleSetState(data)
        }
        getData(setState)
      }
    }
  }, [])

  return state
}

export default useApi
