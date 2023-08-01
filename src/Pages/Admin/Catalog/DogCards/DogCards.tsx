import { useState } from 'react'
import useGet from '../../../../API/useGet'
import DogSearch from '../../../../Components/DogSearch/DogSearch'
import Gallery from '../../../../Components/Gallery/Gallery'
import { DogTypes } from '../../../../API/types'
import { AdminGalleryButton, StyledDogCards } from './DogCards.style'
import { Link } from 'react-router-dom'

function DogCards() {
  const [dogsState, setDogsState] = useState<DogTypes>({ data: [] })
  useGet({
    category: 'dogs',
    state: dogsState,
    setState: setDogsState,
  }) as DogTypes

  const [filteredDogsState, setFilteredDogsState] = useState<DogTypes>(dogsState)

  return (
    <StyledDogCards>
      <AdminGalleryButton>
        <Link to="/admin/new-card">Додати нову картку</Link>
      </AdminGalleryButton>
      <DogSearch
        state={filteredDogsState}
        setState={setFilteredDogsState}
        options={dogsState as DogTypes}
      />
      <Gallery state={filteredDogsState as DogTypes} admin={true} />
    </StyledDogCards>
  )
}

export default DogCards
