import { useEffect, useState } from 'react'
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

  const nextSlide = () =>
    setInitialSliderNumber(
      initialSliderNumber === SlidersData.length - 1 ? 0 : initialSliderNumber + 1,
    )

  const prevSlide = () =>
    setInitialSliderNumber(
      initialSliderNumber === 0 ? SlidersData.length - 1 : initialSliderNumber - 1,
    )

  useEffect(() => {
    const wrapper = document.querySelector('#wrapper')

    console.log('swipe')
    wrapper?.scrollTo({
      top: 0,
      left: sliderWidth * initialSliderNumber,
      behavior: 'smooth',
    })
    window.scrollTo(0, 0)
  }, [initialSliderNumber, sliderWidth])

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

  const handleSwipe = (direction: any) => {
    if (direction === 'next') {
      setSliderNumber((prevIndex) =>
        prevIndex === SlidersData.length - 1 ? 0 : prevIndex + 1,
      )
    } else if (direction === 'prev') {
      setSliderNumber((prevIndex) =>
        prevIndex === 0 ? SlidersData.length - 1 : prevIndex - 1,
      )
    }
  }

  const { onTouchStart, onTouchMove } = useSwipe(handleSwipe)
  return (
    <CarouselDiv onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
      <StyledPrevArrowContainer>
        <StyledPrevArrow type="button" onClick={prevSlide} />
      </StyledPrevArrowContainer>
      <WrapperSliders id="wrapper">
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
