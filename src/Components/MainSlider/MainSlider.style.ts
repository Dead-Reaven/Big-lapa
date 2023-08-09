import styled from 'styled-components'
import { ReactComponent as IcoPrev } from '../MainSlider/images/prev.svg'
import { ReactComponent as IcoNext } from '../MainSlider/images/next.svg'
import TitleH1 from '../UI/TitleH1.style'

interface StyledSlideProp {
  $isActive: boolean
}
interface StyledBulletProp {
  $isActive: boolean
}
const CarouselDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`
const StyledImageItem = styled.img<StyledSlideProp>`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
`
const StyledPrevArrow = styled(IcoPrev)`
  position: absolute;
  z-index: 5;
  left: 93px;
  &:hover {
    cursor: pointer;
  }
`
const StyledNextArrow = styled(IcoNext)`
  position: absolute;
  z-index: 5;
  right: 93px;
  &:hover {
    cursor: pointer;
  }
`
const StyledBullets = styled.span`
  position: absolute;
  display: flex;
  bottom: 2rem;
`

const Bullet = styled.button<StyledBulletProp>`
  position: relative;
  background-color: ${(props) => (props.$isActive ? '#f9f9f9' : 'transparent')};
  height: 17px;
  width: 17px;
  border-radius: 100%;
  border: 1px solid #f9f9f9;
  outline: none;
  cursor: pointer;
  margin-left: 40px;
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
`
const StyledTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 16px;
`
const StyledTitle = styled(TitleH1)`
  color: ${({ theme }) => theme.colors.background};
  position: absolute;
  z-index: 6;
`
const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.background};
  position: absolute;
  z-index: 6;
  top: 1000%;
`
export {
  CarouselDiv,
  StyledImageItem,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  StyledTitle,
  StyledTextContainer,
  StyledParagraph,
}
