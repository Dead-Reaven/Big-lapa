import React from 'react'
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
import Container from '../../../../Components/UI/Container.style'
import Flex from '../../../../Components/UI/Flex.styles'
import DogCard from './DogCard'

function Gallery() {
  const dogsList = [
    {
      id: 1,
      src: dog,
    },
    {
      id: 2,
      src: dog,
    },
    {
      id: 3,
      src: dog,
    },
    {
      id: 4,
      src: dog,
    },
    {
      id: 5,
      src: dog,
    },
    {
      id: 6,
      src: dog,
    },
  ]
  return (
    <StyledGallery>
      <Container>
        <Flex direction="column" align="center">
          <GalleryTitle>Наші хвости</GalleryTitle>
          <DogsCards>
            {dogsList.map((dog) => (
              <DogCard key={dog.id} src={dog.src} />
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
