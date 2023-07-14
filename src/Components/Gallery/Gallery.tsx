import {
  DogsCards,
  GalleryTitle,
  Pagination,
  PaginationButton,
  PaginationNav,
  StyledGallery,
} from './Gallery.style'
import dog from './img/Dog_photo.png'
import { ReactComponent as Refresh } from './img/refresh.svg'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import DogCard from './DogCard'

interface Props {
  admin?: boolean
}

function Gallery({ admin }: Props) {
  const dogsList = [
    {
      id: 1,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
    {
      id: 2,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
    {
      id: 3,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
    {
      id: 4,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
    {
      id: 5,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
    {
      id: 6,
      src: dog,
      name: 'Скай',
      sex: 'Хлопчик',
      age: '2 роки',
    },
  ]
  return (
    <StyledGallery admin={admin}>
      <Container>
        <Flex direction="column" align="center">
          <GalleryTitle>Наші хвости</GalleryTitle>
          <DogsCards>
            {dogsList.map((dog) => (
              <DogCard dog={dog} key={dog.id} admin={admin} />
            ))}
          </DogsCards>

          {!admin && (
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
          )}
        </Flex>
      </Container>
    </StyledGallery>
  )
}

export default Gallery
