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

import { ReactComponent as IcoPrevBtn } from '../DogSlider/img/PrevButton.svg'
import { ReactComponent as IcoNextBtn } from '../DogSlider/img/NextButton.svg'
import domen from '../../../../API/domen'

interface Props {
  photos: string[]
}

function DogSlider({ photos }: Props) {
  const [slide, setSlide] = useState(0)

  const handleClick = (imageIndex: number) => {
    setSlide(imageIndex)
  }

  const onPrevClick = () => {
    setSlide(slide === 0 ? photos.length - 1 : slide - 1)
  }
  const onNextClick = () => {
    setSlide(slide === photos.length - 1 ? 0 : slide + 1)
  }

  const sliderData = `${domen}/api/files/${photos[slide]}`
  return (
    <>
      {photos[0] && (
        <SliderContainer>
          <MainImageWrapper>
            <StyledMainImage src={sliderData} alt="dog" />
          </MainImageWrapper>
          {photos.length > 1 && (
            <StyledThumbsBtnsContainer>
              <StyledPrevButton onClick={onPrevClick}>
                <IcoPrevBtn />
              </StyledPrevButton>
              <ThumbsContainer>
                <ThumbsWrapper $left={slide}>
                  {photos.map((image, index) => (
                    <StyledThumbsDiv key={image} $isActive={slide === index}>
                      <StyledThumbs
                        src={`${domen}/api/files/${image}`}
                        onClick={() => handleClick(index)}
                        alt="dog"
                      />
                    </StyledThumbsDiv>
                  ))}
                </ThumbsWrapper>
              </ThumbsContainer>
              <StyledNextButton onClick={onNextClick}>
                <IcoNextBtn />
              </StyledNextButton>
            </StyledThumbsBtnsContainer>
          )}
        </SliderContainer>
      )}
    </>
  )
}

export default DogSlider
