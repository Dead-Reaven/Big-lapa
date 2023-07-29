import {
  DogsCards,
  Pagination,
  PaginationButton,
  PaginationNav,
  StyledGallery,
  DogsAmount,
} from './Gallery.style'
import dogImage from './img/Dog_photo.png'
import { ReactComponent as Refresh } from './img/refresh.svg'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import DogCard from './DogCard'
import { DogTypes } from '../../API/types'

interface Props {
  admin?: boolean
  state?: DogTypes | null
}

function Gallery({ admin, state }: Props) {
  const dogsList = state?.data

  return (
    <StyledGallery $admin={admin}>
      <Container>
        <Flex $direction="column" $align="center">
          <DogsAmount>
            <span>Знайдено:</span> {dogsList?.length} собак
          </DogsAmount>
          <DogsCards>
            {dogsList?.map((dog) => (
              <DogCard dog={dog} src={dogImage} key={dog.id} admin={admin} />
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
