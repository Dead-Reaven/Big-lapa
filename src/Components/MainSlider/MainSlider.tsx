import React, { useState } from 'react'
import slide1 from '../MainSlider/images/1441.png'
import slide2 from '../MainSlider/images/1442.png'
import slide3 from '../MainSlider/images/1443.png'
import slide4 from '../MainSlider/images/1444.png'
import {
  CarouselDiv,
  StyledImageItem,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  StyledTitle,
  StyledTextContainer,
  StyledParagraph,
} from '../../Components/MainSlider/MainSlider.style'

function MainSlider() {
  const images = [
    {
      image: slide1,
      title: 'dog 1',
      heading: 'Big Lapa - притулок для собак',
      paragraph: 'Знайдіть свого вірного хвоста у нашому притулку',
      id: 0,
    },
    {
      image: slide2,
      title: 'dog 2',
      heading: 'Наша місія',
      paragraph: 'Дізнайтеся більше про притулок та його діяльність',
      id: 1,
    },
    {
      image: slide3,
      title: 'dog 3',
      heading: 'Хвости шукають люблячий дім',
      paragraph: 'Познайомтеся з нашими чудовими мешканцями',
      id: 2,
    },
    {
      image: slide4,
      title: 'dog 4',
      heading: 'Зв’яжіться з нами',
      paragraph:
        'Напишіть нам, якщо у вас залишилися питання, а також дізнайтеся адресу притулку',
      id: 3,
    },
  ]
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1)
  }
  return (
    <CarouselDiv>
      <StyledTextContainer>
        <StyledTitle>{images[slide].heading}</StyledTitle>
        <StyledParagraph>{images[slide].paragraph}</StyledParagraph>
      </StyledTextContainer>
      <button onClick={prevSlide}>
        <StyledPrevArrow />
      </button>
      {images.map((item, idx) => {
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
        {images.map((_, idx) => {
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
