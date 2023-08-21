import {
  DogsCards,
  Pagination,
  PaginationButton,
  PaginationNav,
  StyledGallery,
  DogsAmount,
} from './Gallery.style'
import { ReactComponent as Refresh } from './img/refresh.svg'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import DogCard from './DogCard'
import { DogType } from '../../API/types'
import { UseMutateFunction } from '@tanstack/react-query'

interface Props {
  admin?: boolean
  dogsList?: DogType[] | null
  onDeleteDog?: UseMutateFunction<string, unknown, string, unknown>
}

function Gallery({ admin, dogsList, onDeleteDog }: Props) {
  return (
    <StyledGallery $admin={admin}>
      <Container>
        <Flex $direction="column" $align="center">
          <DogsAmount>
            <span>Знайдено:</span> {dogsList?.length} собак
          </DogsAmount>
          <DogsCards>
            {dogsList?.map((dog) => (
              <DogCard dog={dog} key={dog._id} admin={admin} onDeleteDog={onDeleteDog} />
            ))}
          </DogsCards>
          <Pagination>
            <PaginationButton>
              <Refresh />
              Показати ще
            </PaginationButton>
            <PaginationNav>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>...</li>
              <li>16</li>
            </PaginationNav>
          </Pagination>
        </Flex>
      </Container>
    </StyledGallery>
  )
}

export default Gallery
