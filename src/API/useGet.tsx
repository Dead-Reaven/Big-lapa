import React, { useEffect, useState } from 'react'
import DogsJson from './testDogs.json'
import { ContactTypes, DogTypes, PartnerTypes } from './types'

type Select = 'contacts' | 'dogs' | 'partners'

function useGet(select: Select) {
  const [contacts, setContacts] = useState<ContactTypes | null>(null)
  const [dogs, setDogs] = useState<DogTypes | null>(null)

  const [partners, setPartners] = useState<PartnerTypes[]>([])
  const [partnersID, setPartnersID] = useState<string[]>([])

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
    if (select === 'partners') {
      const getPartnersId = async () => {
        const response = await fetch(
          `https://big-lapa-api-production.up.railway.app/api/images/category/Logo`,
        )
        const partnersId = await response.json()
        setPartnersID(partnersId)
      }
      getPartnersId()
    }
  }, [])

  useEffect(() => {
    if (partnersID.length > 0) {
      partnersID.forEach((id) => fetchImage(id))
    }
  }, [partnersID])

  const fetchImage = async (id: string) => {
    console.log('fetchImage')
    const response = await fetch(
      `https://big-lapa-api-production.up.railway.app/api/images/${id}`,
    )

    if (!response.ok) {
      throw new Error('Network response was not ok: fetchImage failed')
    }

    const data = await response.arrayBuffer()
    const base64 = btoa(
      new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''),
    )
    const newImg = `data:image/png;base64, ${base64}`

    const convertedImges = []
    for (let i = 0; i < partnersID.length; i++) {
      convertedImges.push({
        id: partnersID[i],
        src: newImg,
      })
    }
    setPartners(convertedImges)
  }

  if (select === 'contacts') return contacts as ContactTypes | null
  if (select === 'dogs') return dogs as DogTypes | null
  if (select === 'partners') return partners as PartnerTypes[] | null
}
export default useGet
