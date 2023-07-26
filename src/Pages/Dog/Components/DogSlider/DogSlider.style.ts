import { styled } from 'styled-components'

interface StyledThumbsProps {
  $isActive: boolean
}
const StyledThumbs = styled.img`
  cursor: pointer;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledThumbsDiv = styled.div<StyledThumbsProps>`
  aspect-ratio: 1 / 1;
  min-height: 100%;

  border: ${(props) => (props.$isActive ? '2px solid white' : '1px solid transparent')};
  border-radius: 3px;
  @media (min-width: 768px) {
    min-height: 100%;
  }
`

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ThumbsContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 290px;
  min-height: 67px;

  @media (min-width: 768px) {
    width: 456px;
    min-height: 88px;
  }
`

const ThumbsWrapper = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
  @media (min-width: 768px) {
    gap: 8px;
  }
`

const StyledThumbsBtnsContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 16px;
  padding: 0 10px;
  max-width: 476px;
`
const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 455px;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    height: 600px;
    width: 476px;
    margin-bottom: 24px;
  }
`
const StyledMainImage = styled.img`
  width: 100%;

  border-radius: 4px;
  object-fit: cover;
`
const StyledPrevButton = styled.button`
  padding-left: 6px;
`
const StyledNextButton = styled.button`
  padding-right: 6px;
`

export {
  SliderContainer,
  StyledThumbs,
  ThumbsWrapper,
  ThumbsContainer,
  StyledMainImage,
  MainImageWrapper,
  StyledThumbsDiv,
  StyledThumbsBtnsContainer,
  StyledNextButton,
  StyledPrevButton,
}
