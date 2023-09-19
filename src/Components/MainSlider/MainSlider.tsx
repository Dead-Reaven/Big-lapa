import { useCallback, useEffect, useState } from 'react'
import SlidersData from './content'
import useSwipe from '../../hooks/useSwipe'
import {
  CarouselDiv,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  StyledSlider,
  WrapperSliders,
  TextContainer,
  StyledNextArrowContainer,
  StyledPrevArrowContainer,
} from '../../Components/MainSlider/MainSlider.style'
import TitleH1 from '../UI/TitleH1.style'
import TitleH3 from '../UI/TitleH3.styles'

interface MainSliderProps {
  initialSliderNumber: number
  setInitialSliderNumber: React.Dispatch<React.SetStateAction<number>>
}

function MainSlider({ initialSliderNumber, setInitialSliderNumber }: MainSliderProps) {
  if (initialSliderNumber === -1) return null

  const [sliderWidth, setSliderWidth] = useState(window.innerWidth)

  const changeSlide = useCallback(
    (offset: number) => {
      const nextSlide =
        (initialSliderNumber + offset + SlidersData.length) % SlidersData.length
      setInitialSliderNumber(nextSlide)
    },
    [initialSliderNumber, setInitialSliderNumber],
  )

  const nextSlide = () => changeSlide(1)
  const prevSlide = () => changeSlide(-1)

  useEffect(() => {
    // Update sliderWidth when the viewport is resized
    const handleResize = () => {
      setSliderWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleSwipe = useCallback(
    (direction: string) => {
      if (direction === 'next') changeSlide(1)
      else if (direction === 'prev') changeSlide(-1)
    },
    [changeSlide],
  )

  const { onTouchStart, onTouchMove } = useSwipe(handleSwipe)
  return (
    <CarouselDiv onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <StyledPrevArrowContainer>
        <StyledPrevArrow type="button" onClick={prevSlide} />
      </StyledPrevArrowContainer>
      <WrapperSliders>
        <div
          id="inner-wrapper"
          style={{ transform: `translateX(-${sliderWidth * initialSliderNumber}px)` }}
        >
          {SlidersData.map((slider, idx) => (
            <StyledSlider
              key={idx}
              $isActive={initialSliderNumber === idx}
              $background={slider.image}
            >
              <TextContainer>
                <TitleH1>{slider.heading}</TitleH1>
                <TitleH3>{slider.paragraph}</TitleH3>
              </TextContainer>
            </StyledSlider>
          ))}
        </div>
      </WrapperSliders>
      <StyledNextArrowContainer>
        <StyledNextArrow type="button" onClick={nextSlide} />
      </StyledNextArrowContainer>

      <StyledBullets>
        {SlidersData.map((_, idx) => (
          <Bullet
            key={idx}
            $isActive={initialSliderNumber === idx}
            onClick={() => setInitialSliderNumber(idx)}
          />
        ))}
      </StyledBullets>
    </CarouselDiv>
  )
}

export default MainSlider
