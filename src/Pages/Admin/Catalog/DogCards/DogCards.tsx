import { useState } from 'react'
import useGet from '../../../../API/useGet'
import DogSearch from '../../../../Components/DogSearch/DogSearch'
import Gallery from '../../../../Components/Gallery/Gallery'
import { DogTypes } from '../../../../API/types'
import { AdminGalleryButton, StyledDogCards } from './DogCards.style'
import { Link } from 'react-router-dom'

function DogCards() {
  const fetchedData = useGet('dogs') as DogTypes | null
  const [state, setState] = useState<DogTypes | null>(fetchedData)
  return (
    <StyledDogCards>
      <AdminGalleryButton>
        <Link to="/admin/new-card">Додати нову картку</Link>
      </AdminGalleryButton>
      <DogSearch setState={setState} options={fetchedData} />
      <Gallery state={state} admin={true} />
    </StyledDogCards>
  )
}

export default DogCards
