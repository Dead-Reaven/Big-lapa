import styled from 'styled-components'
import { ReactComponent as IcoPrev } from '../MainSlider/images/prev.svg'
import { ReactComponent as IcoNext } from '../MainSlider/images/next.svg'
import Container from '../UI/Container.style'

interface isActiveProp {
  $isActive: boolean
}

const CarouselDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 96px;
  height: calc(100vh - 96px);
  user-select: none;
  color: white;
`
interface styledImageItemPros {
  $isActive: boolean
  $background: any
}
const WrapperSliders = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden; /* Hide the default scrollbar */
  scroll-behavior: smooth; /* Enable smooth scrolling */
`
const TextContainer = styled(Container)`
  /* padding: 25px; */
  max-width: none;
`

const StyledSlider = styled.div<styledImageItemPros>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $background }) => `url(${$background}) no-repeat`};
  background-size: cover;
  background-position: center top;

  @media screen and (max-width: 400px) {
    background-position: center;
  }

  h1,
  h2,
  h3 {
    text-align: center;
    padding: 0px 30px;
    @media screen and (max-width: 900px) {
      padding: 0px;
    }
  }
`

const StyledPrevArrow = styled(IcoPrev)`
  position: absolute;
  z-index: 5;
  left: calc(4%);
  @media screen and (max-width: 900px) {
    left: calc(20%);
    bottom: 15%;
  }
  &:hover {
    cursor: pointer;
  }
`
const StyledNextArrow = styled(IcoNext)`
  position: absolute;
  z-index: 5;
  right: calc(4%);
  @media screen and (max-width: 900px) {
    right: calc(20%);
    bottom: 15%;
  }
  &:hover {
    cursor: pointer;
  }
`
const StyledBullets = styled.span`
  position: absolute;
  display: flex;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 50%);

  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 60px;
  }
`

const Bullet = styled.button<isActiveProp>`
  position: relative;
  background-color: ${(props) => (props.$isActive ? '#f9f9f9' : 'transparent')};
  height: 17px;
  width: 17px;
  border-radius: 100%;
  border: 1px solid #f9f9f9;
  outline: none;
  cursor: pointer;
  margin-left: 40px;
  transition: background-color 0.3s; /* Add transition for smooth effect */

  &::after {
    content: ' ';
    position: absolute;
    width: 17px;
    height: 1px;
    background-color: #f9f9f9;
    left: 150%;
  }
  &:last-child::after {
    display: none;
  }
  &:first-child {
    margin-left: 0;
  }
`

export {
  CarouselDiv,
  StyledSlider,
  TextContainer,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  WrapperSliders,
}
