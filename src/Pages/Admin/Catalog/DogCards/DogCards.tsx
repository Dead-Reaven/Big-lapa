import { useState } from 'react'
// react query
import { useQuery, useMutation } from '@tanstack/react-query'
import DogSearch from '../../../../Components/DogSearch/DogSearch'
import Gallery from '../../../../Components/Gallery/Gallery'
import { DogType } from '../../../../API/types'
import { AdminGalleryButton, StyledDogCards } from './DogCards.style'
import { Link } from 'react-router-dom'
import getDogs from '../../../../API/fetchers/DogCards/getDogs'
import deleteDog from '../../../../API/fetchers/DogCards/deleteDog'
import Message from '../../Components/UI/Message'

function DogCards() {
  console.log('DogCards')
  const [dogsState, setDogsState] = useState<DogType[]>([])
  const [filteredDogsState, setFilteredDogsState] = useState<DogType[]>([])

  const { refetch: refetchGetDogs } = useQuery({
    queryKey: ['dogs'],
    initialData: dogsState,
    queryFn: getDogs,
    onSuccess: (data) => {
      setDogsState(data)
    },
    refetchOnWindowFocus: false,
  })

  const {
    mutate: deleteSelectedDog,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useMutation((dogId: string) => deleteDog(dogId), {
    onSuccess: () => {
      refetchGetDogs()
      console.log('dog card deleted')
    },
  })

  return (
    <StyledDogCards>
      <AdminGalleryButton>
        <Link to="/admin/new-card">Додати нову картку</Link>
      </AdminGalleryButton>
      <div>
        <DogSearch
          state={filteredDogsState}
          setState={setFilteredDogsState}
          options={dogsState as DogType[]}
        />
      </div>
      <Gallery
        dogsList={filteredDogsState}
        admin={true}
        onDeleteDog={deleteSelectedDog}
      />
      {isDeleteSuccess && <Message mode="green">Картку собаки успішно видалено!</Message>}
      {isDeleteError && (
        <Message mode="green">
          Видалення картки не було виконано, спробуйте ще раз
        </Message>
      )}
    </StyledDogCards>
  )
}

export default DogCards
