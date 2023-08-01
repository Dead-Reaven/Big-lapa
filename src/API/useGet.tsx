import React, { useEffect, useState } from 'react'
import DogsJson from './testDogs.json'
import { ContactTypes, DogTypes, PartnerTypes } from './types'

interface Props {
  category: 'contacts' | 'dogs' | 'partners'
  state: ContactTypes | DogTypes | PartnerTypes[]
  setState: React.Dispatch<React.SetStateAction<any>>
}

function useGet({ category, state, setState }: Props) {
  const [partnersID, setPartnersID] = useState<string[]>([])

  useEffect(() => {
    if (category === 'contacts') {
      console.log('contacts api called')
      const getData = async (handleSetState: React.Dispatch<ContactTypes>) => {
        const response = await fetch(
          'https://big-lapa-api-production.up.railway.app/api/main/get',
        )
        const data = await response.json()
        handleSetState(data)
      }
      getData(setState as React.Dispatch<ContactTypes>)
    }

    if (category === 'dogs') {
      console.log('dogs api called')
      const getData = async (handleSetState: React.Dispatch<DogTypes>) => {
        const res: DogTypes = DogsJson
        handleSetState(res)
      }
      const timeoutId = window.setTimeout(() => {
        getData(setState as React.Dispatch<DogTypes>)
      }, 1000)

      // Cleanup the timeout on component unmount (optional but recommended)
      return () => window.clearTimeout(timeoutId)
    }
    if (category === 'partners') {
      console.log('partners api called')
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
      Promise.all(partnersID.map((id) => getPartner(id)))
        .then((resolved) => setState(resolved))
        .catch((error) => console.log(error))
    }
  }, [partnersID])

  const getPartner = async (id: string): Promise<PartnerTypes> => {
    console.log('fetched partner img', { id })
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
    const base64Img = `data:image/png;base64, ${base64}`
    return {
      id: id,
      src: base64Img as string,
      encodedBase64: base64Img,
    }
  }

  if (category === 'contacts') return state as ContactTypes | null
  if (category === 'dogs') return state as DogTypes | null
  if (category === 'partners') return state as PartnerTypes[] | null
}
export default useGet
