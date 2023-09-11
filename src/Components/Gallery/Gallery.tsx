import { UseMutateFunction } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { DogType } from '../../API/types'
import Pagination from '../Pagination/Pagination'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import DogCard from './DogCard'
import { DogsAmount, DogsCards, StyledGallery } from './Gallery.style'
interface Props {
  admin?: boolean
  dogsList: DogType[] | null
  onDeleteDog: UseMutateFunction<void, unknown, string, unknown>
}

function Gallery({ admin, dogsList, onDeleteDog }: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(10)
  const [message, setMessage] = useState('')

  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = dogsList ? dogsList.slice(indexOfFirstCard, indexOfLastCard) : []

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo(750, 750)
  }

  const nextPage = () => {
    if (dogsList !== null) {
      if (currentPage !== Math.ceil(dogsList.length / cardsPerPage)) {
        setCardsPerPage(cardsPerPage + 10)
      } else {
        setMessage('Список песиків закінчився')
      }
    }
  }

  useEffect(() => {
    const screenWidth = window.innerWidth
    console.log('SCREEN WIDTH', screenWidth)
    if (screenWidth >= 1001) {
      setCardsPerPage(12)
    } else {
      setCardsPerPage(10)
    }
  }, [])
  return (
    <StyledGallery $admin={admin}>
      <Container>
        <Flex $direction="column" $align="center">
          {dogsList && dogsList.length === 0 && (
            <DogsAmount>Нічого не знайдено. Змініть запит</DogsAmount>
          )}

          {dogsList && dogsList.length > 0 && (
            <>
              <DogsAmount>
                <span>Знайдено:</span> {dogsList?.length} собак
              </DogsAmount>
              <DogsCards>
                {currentCards?.map((dog) => (
                  <DogCard
                    dog={dog}
                    key={dog._id}
                    admin={admin}
                    onDeleteDog={onDeleteDog}
                  />
                ))}
              </DogsCards>
              <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={dogsList.length}
                paginate={paginate}
                nextPage={nextPage}
                message={message}
                currentPage={currentPage}
              />
            </>
          )}
        </Flex>
      </Container>
    </StyledGallery>
  )
}

export default Gallery
