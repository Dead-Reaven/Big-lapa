import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getPartner from './fetchers/getPartnerImg'
import DogsJson from './testDogs.json'
import { ContactTypes, DogTypes, PartnerTypes, RequestStatusTypes } from './types'

interface Props {
  category: 'contacts' | 'dogs' | 'partners'
  state: ContactTypes | DogTypes | PartnerTypes[]
  setState: React.Dispatch<React.SetStateAction<any>>
}

type GetPartnersIdResponse = { Url: string; name: string }

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
        await axios
          .get(`https://naughty-bear-train.cyclic.cloud/api/main/get`)
          .then((res) => {
            return handleSetState(res.data)
          })
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
        await axios
          .get(`https://naughty-bear-train.cyclic.cloud/api/files/category/Logo`)
          .then((res) => {
            const mappedIds: string[] = res.data.map(
              (el: GetPartnersIdResponse) => el.Url,
            )
            return mappedIds
          })
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
