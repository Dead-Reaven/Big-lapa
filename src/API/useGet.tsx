import React, { useEffect, useState } from 'react'
import DogsJson from './testDogs.json'
import { ContactTypes, DogTypes, PartnerTypes, RequestStatusTypes } from './types'
import getPartner from './promises/getPartnerImg'

interface Props {
  category: 'contacts' | 'dogs' | 'partners'
  state: ContactTypes | DogTypes | PartnerTypes[]
  setState: React.Dispatch<React.SetStateAction<any>>
}

function useGet({ category, state, setState }: Props) {
  const [partnersID, setPartnersID] = useState<string[]>([])
  const [status, setStatus] = useState<RequestStatusTypes>({
    pending: false,
    resolve: false,
    reject: false,
    massage: '',
  })

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
    if (category === 'partners')
      if (partnersID.length && !status.pending) {
        console.log('useEffect: [partnersID] called', partnersID.length)
        Promise.all(partnersID.map((id) => getPartner(id)))
          .then((resolved) => {
            console.log({ resolved })
            setState(resolved)
            setStatus({
              ...status,
              pending: false,
              resolve: true,
              massage: 'Лого партнерів успішно завантажені',
            })
          })
          .catch((error) => {
            console.log(error)
            setStatus({ ...status, pending: false, reject: true, massage: error })
          })
        setStatus({ ...status, pending: true, resolve: true })
      }
  }, [partnersID])

  if (category === 'contacts') return state as ContactTypes | null
  if (category === 'dogs') return state as DogTypes | null
  if (category === 'partners') return status
}
export default useGet
