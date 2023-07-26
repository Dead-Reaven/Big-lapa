import { useState } from 'react'
import useGet from '../../../../API/useGet'
import DogSearch from '../../../../Components/DogSearch/DogSearch'
import Gallery from '../../../../Components/Gallery/Gallery'
import { DogTypes } from '../../../../API/types'
import { StyledDogCards } from './DogCards.style'

function DogCards() {
  const fetchedData = useGet('dogs') as DogTypes | null
  const [state, setState] = useState<DogTypes | null>(fetchedData)
  return (
    <StyledDogCards>
      <DogSearch setState={setState} options={fetchedData} />
      <Gallery state={state} admin={true} />
    </StyledDogCards>
  )
}

export default DogCards
