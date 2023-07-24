import React, { useEffect, useState } from 'react'
import DogsJson from './testDogs.json'
import { Contacts, DogTypes } from './types'

type Select = 'contacts' | 'dogs'
type Type = 'get'

function useGet(select: Select, type: Type) {
  const [contacts, setContacts] = useState<Contacts | null>(null)
  const [dogs, setDogs] = useState<DogTypes | null>(null)

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
        getData(setContacts)
      }
    }

    if (select === 'dogs') {
      if (type === 'get') {
        const getData = async (handleSetState: React.Dispatch<DogTypes>) => {
          const res: DogTypes = DogsJson
          handleSetState(res)
        }
        getData(setDogs)
      }
    }
  }, [])

  return select === 'contacts' ? contacts : dogs
}
export default useGet
