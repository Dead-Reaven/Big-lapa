import React, { useEffect, useState } from 'react'
import DogsJson from './testDogs.json'
import { ContactTypes, DogTypes } from './types'

type Select = 'contacts' | 'dogs'

function useGet(select: Select) {
  const [contacts, setContacts] = useState<ContactTypes | null>(null)
  const [dogs, setDogs] = useState<DogTypes | null>(null)

  useEffect(() => {
    if (select === 'contacts') {
      const getData = async (handleSetState: React.Dispatch<ContactTypes>) => {
        const response = await fetch(
          'https://big-lapa-api-production.up.railway.app/api/main/get',
        )
        const data = await response.json()
        handleSetState(data)
      }
      getData(setContacts)
    }

    if (select === 'dogs') {
      const getData = async (handleSetState: React.Dispatch<DogTypes>) => {
        const res: DogTypes = DogsJson
        handleSetState(res)
      }
      const timeoutId = window.setTimeout(() => {
        getData(setDogs)
      }, 1000)

      // Cleanup the timeout on component unmount (optional but recommended)
      return () => window.clearTimeout(timeoutId)
    }
  }, [])

  if (select === 'contacts') return contacts as ContactTypes | null
  if (select === 'dogs') return dogs as DogTypes | null
}
export default useGet
