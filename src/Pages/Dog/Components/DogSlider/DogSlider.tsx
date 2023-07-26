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
  ThumbsContainer,
  SliderContainer,
} from './DogSlider.style'

// import dog1 from './img/dog1.png'
import dog2 from './img/dog2.png'
import dog3 from './img/dog3.png'
import dog4 from './img/dog4.png'
import dog5 from './img/dog5.png'
import { ReactComponent as IcoPrevBtn } from '../DogSlider/img/PrevButton.svg'
import { ReactComponent as IcoNextBtn } from '../DogSlider/img/NextButton.svg'

interface Props {
  src?: string
}

function DogSlider({ src }: Props) {
  const images = [
    {
      image: src,
      title: 'dog 1',
      id: 0,
    },
    {
      image: dog2,
      title: 'dog 2',
      id: 1,
    },
    {
      image: dog3,
      title: 'dog 3',
      id: 2,
    },
    {
      image: dog4,
      title: 'dog 4',
      id: 3,
    },
    {
      image: dog5,
      title: 'dog 5',
      id: 4,
    },
    {
      image: dog3,
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
    <SliderContainer>
      <MainImageWrapper>
        <StyledMainImage src={sliderData.image} alt={sliderData.title} />
      </MainImageWrapper>
      <StyledThumbsBtnsContainer>
        <StyledPrevButton onClick={onPrevClick}>
          <IcoPrevBtn />
        </StyledPrevButton>
        <ThumbsContainer>
          <ThumbsWrapper left={slide}>
            {images.map(({ id, image, title }, index) => (
              <StyledThumbsDiv key={id} isActive={slide === index}>
                <StyledThumbs
                  src={image}
                  onClick={() => handleClick(index)}
                  alt={title}
                />
              </StyledThumbsDiv>
            ))}
          </ThumbsWrapper>
        </ThumbsContainer>
        <StyledNextButton onClick={onNextClick}>
          <IcoNextBtn />
        </StyledNextButton>
      </StyledThumbsBtnsContainer>
    </SliderContainer>
  )
}

export default DogSlider
