import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Thumbs } from 'swiper/modules'
import {
  StyledThumbWrapper,
  StyledImg,
  StyledThumbImg,
  StyledSwiperSlide,
  StyledSwiper,
} from './DogSlider.style'

import { useState } from 'react'

interface DogImage {
  image: string
  title: string
  id: string
}

interface DogSliderProps {
  images: DogImage[]
}
function DogSlider({ images }: DogSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState()

  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        grabCursor={true}
        spaceBetween={6}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <StyledImg src={image.image} alt={image.title} />
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledSwiper
        loop={true}
        navigation={true}
        modules={[Navigation, Thumbs]}
        spaceBetween={6}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={setThumbsSwiper}
      >
        {images.map((image) => (
          <StyledSwiperSlide key={image.id}>
            <StyledThumbWrapper>
              <StyledThumbImg src={image.image} alt={image.title} />
            </StyledThumbWrapper>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  )
}

export default DogSlider
