import { styled } from 'styled-components'

interface StyledThumbsProps {
  isActive: boolean
}
const StyledThumbs = styled.img`
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledThumbsDiv = styled.div<StyledThumbsProps>`
  width: 71px;
  max-height: 67px;

  border: ${(props) => (props.isActive ? '2px solid white' : '1px solid transparent')};
  border-radius: 3px;
  @media (min-width: 768px) {
    width: 88px;
    max-height: 88px;
  }
`
const ThumbsWrapper = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 18px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  @media (min-width: 768px) {
    gap: 8px;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 24px;
  }
  @media (min-width: 880px) {
    padding: 0 80px;
  }
  @media (min-width: 1280px) {
    padding: 0 50px;
    max-width: 476px;
  }
`

const StyledThumbsBtnsContainer = styled.div`
  position: relative;
  overflow: hidden;
  @media (min-width: 1280px) {
    max-width: 476px;
  }
`
const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 455px;
  @media (min-width: 768px) {
    height: 600px;
    padding: 0 106px;
  }
  @media (min-width: 880px) {
    height: 700px;
    padding: 0 206px;
  }
  @media (min-width: 1280px) {
    padding: 0;
    height: 600px;
    max-width: 476px;
  }
`
const StyledMainImage = styled.img`
  width: 100%;

  border-radius: 4px;
  object-fit: cover;
`
const StyledPrevButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 2%;
  @media (min-width: 600px) {
    left: 4%;
  }
  @media (min-width: 768px) {
    left: 5%;
  }
  @media (min-width: 880px) {
    left: 11%;
  }
  @media (min-width: 1280px) {
    left: 2%;
  }
`
const StyledNextButton = styled.button`
  position: absolute;
  z-index: 2;
  right: 2%;
  top: 50%;
  @media (min-width: 600px) {
    right: 4%;
  }
  @media (min-width: 768px) {
    right: 5%;
  }
  @media (min-width: 880px) {
    right: 11%;
  }
  @media (min-width: 1280px) {
    right: 2%;
  }
`

export {
  StyledThumbs,
  ThumbsWrapper,
  StyledMainImage,
  MainImageWrapper,
  StyledThumbsDiv,
  StyledThumbsBtnsContainer,
  StyledNextButton,
  StyledPrevButton,
}
