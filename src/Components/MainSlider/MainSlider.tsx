import { useState } from 'react'
import SlidersData from './content'

import {
  CarouselDiv,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  StyledSlider,
  WrapperSliders,
  TextContainer,
} from '../../Components/MainSlider/MainSlider.style'
import TitleH1 from '../UI/TitleH1.style'
import TitleH3 from '../UI/TitleH3.styles'

function MainSlider() {
  const [sliderNumber, setSliderNumber] = useState(0)

  const nextSlide = () => {
    setSliderNumber(sliderNumber === SlidersData.length - 1 ? 0 : sliderNumber + 1)
  }

  const prevSlide = () => {
    setSliderNumber(sliderNumber === 0 ? SlidersData.length - 1 : sliderNumber - 1)
  }
  return (
    <CarouselDiv>
      <WrapperSliders>
        {SlidersData.map((slider, idx) => (
          <StyledSlider
            key={idx}
            $isActive={sliderNumber === idx}
            $background={slider.image}
          >
            <StyledPrevArrow type="button" onClick={prevSlide} />
            <TextContainer>
              <TitleH1>{slider.heading}</TitleH1>
              <TitleH3>{slider.paragraph}</TitleH3>
            </TextContainer>
            <StyledNextArrow type="button" onClick={nextSlide} />
          </StyledSlider>
        ))}
      </WrapperSliders>

      <StyledBullets>
        {SlidersData.map((_, idx) => (
          <Bullet
            key={idx}
            $isActive={sliderNumber === idx}
            onClick={() => setSliderNumber(idx)}
          />
        ))}
      </StyledBullets>
    </CarouselDiv>
  )
}

export default MainSlider
