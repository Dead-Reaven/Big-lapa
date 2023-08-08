import React, { useState } from 'react'
import {
  CarouselDiv,
  StyledImageItem,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
} from '../../Components/MainSlider/MainSlider.style'

interface MainSliderProps {
  data: {
    image: string
    title: string
    id: number
  }[]
}
function MainSlider({ data }: MainSliderProps) {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1)
  }
  return (
    <CarouselDiv>
      <button onClick={prevSlide}>
        <StyledPrevArrow />
      </button>
      {data.map((item, idx) => {
        return (
          <StyledImageItem
            src={item.image}
            alt={item.title}
            key={idx}
            $isActive={slide === idx}
          />
        )
      })}
      <button onClick={nextSlide}>
        <StyledNextArrow />
      </button>
      <StyledBullets>
        {data.map((_, idx) => {
          return (
            <Bullet
              key={idx}
              $isActive={slide === idx}
              onClick={() => setSlide(idx)}
            ></Bullet>
          )
        })}
      </StyledBullets>
    </CarouselDiv>
  )
}

export default MainSlider
