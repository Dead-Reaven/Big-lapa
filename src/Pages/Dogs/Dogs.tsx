import { useState } from 'react'
import { DogType } from '../../API/types'
import { useQuery } from '@tanstack/react-query'
import DogSearch from '../../Components/DogSearch/DogSearch'
import Gallery from '../../Components/Gallery/Gallery'
import { DogsStyled } from './Dogs.style'
import Container from '../../Components/UI/Container.style'
import getDogs from '../../API/fetchers/DogCards/getDogs'

function Dogs() {
  const [dogsState, setDogsState] = useState<DogType[]>([])
  const [filteredDogsState, setFilteredDogsState] = useState<DogType[]>(dogsState)

  useQuery<DogType[]>({
    queryKey: ['dogs'],
    initialData: dogsState,
    queryFn: getDogs,
    onSuccess: (data: DogType[]) => {
      setDogsState(data)
      console.log(data)
    },
  })

  return (
    <DogsStyled data-testid="dogs-page">
      <Container>
        <DogSearch
          state={filteredDogsState}
          setState={setFilteredDogsState}
          options={dogsState as DogType[]}
        />
      </Container>
      <Gallery dogsList={filteredDogsState} />
    </DogsStyled>
  )
}

export default Dogs
