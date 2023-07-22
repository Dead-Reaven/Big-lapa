import React from 'react'
import { useState } from 'react'
import {
  StyledThumbs,
  ThumbsWrapper,
  StyledMainImage,
  MainImageWrapper,
  StyledThumbsDiv,
  StyledThumbsBtnsContainer,
  StyledNextButton,
  StyledPrevButton,
} from './DogSlider.style'
import { ReactComponent as IcoPrevBtn } from '../DogSlider/img/PrevButton.svg'
import { ReactComponent as IcoNextBtn } from '../DogSlider/img/NextButton.svg'
function DogSlider() {
  const images = [
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog1.png',
      title: 'dog 1',
      id: 0,
    },
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog2.png',
      title: 'dog 2',
      id: 1,
    },
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog3.png',
      title: 'dog 3',
      id: 2,
    },
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog4.png',
      title: 'dog 4',
      id: 3,
    },
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog5.png',
      title: 'dog 5',
      id: 4,
    },
    {
      image: '/Big-lapa/src/Pages/Dog/Components/DogSlider/img/dog5.png',
      title: 'dog 5',
      id: 5,
    },
  ]

  const [slide, setSlide] = useState(0)

  const handleClick = (imageIndex: number) => {
    setSlide(imageIndex)
  }

  const onPrevClick = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1)
  }
  const onNextClick = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1)
  }

  const sliderData = images[slide]
  return (
    <div>
      <MainImageWrapper>
        <StyledMainImage src={sliderData.image} alt={sliderData.title} />
      </MainImageWrapper>
      <StyledThumbsBtnsContainer>
        <StyledPrevButton onClick={onPrevClick}>
          <IcoPrevBtn />
        </StyledPrevButton>
        <StyledNextButton onClick={onNextClick}>
          <IcoNextBtn />
        </StyledNextButton>
        <ThumbsWrapper>
          {images.map(({ id, image, title }, index) => (
            <StyledThumbsDiv key={id} isActive={slide === index}>
              <StyledThumbs src={image} onClick={() => handleClick(index)} alt={title} />
            </StyledThumbsDiv>
          ))}
        </ThumbsWrapper>
      </StyledThumbsBtnsContainer>
    </div>
  )
}

export default DogSlider
