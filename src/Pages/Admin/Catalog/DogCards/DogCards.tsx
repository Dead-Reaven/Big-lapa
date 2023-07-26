import { useState } from 'react'
import useGet from '../../../../API/useGet'
import DogSearch from '../../../../Components/DogSearch/DogSearch'
import Gallery from '../../../../Components/Gallery/Gallery'
import { DogTypes } from '../../../../API/types'

function DogCards() {
  const fetchedData = useGet('dogs') as DogTypes | null
  const [state, setState] = useState<DogTypes | null>(fetchedData)
  return (
    <div>
      <DogSearch setState={setState} options={fetchedData} />
      <Gallery state={state} admin={true} />
    </div>
  )
}

export default DogCards
