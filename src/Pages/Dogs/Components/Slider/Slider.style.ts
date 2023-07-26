import { theme } from '../../../../Components/UI/Theme.styles'
import styled from 'styled-components'
import mainPhoto from './img/main_photo.png'
import { ReactComponent as Bullet } from './img/bullet_first.svg'

const SliderStyled = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
  margin-bottom: 120px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const SliderContent = styled.div`
  flex: 0 0 60%;
  max-width: 624px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    flex: 0 0 48%;
  }
  @media screen and (max-width: 767px) {
    gap: 20px;
    text-align: center;
    h1 {
      text-align: center;
    }
  }
`

const SliderButton = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.background};
  padding: ${theme.paddings.button};
  border-radius: 4px;
  font-size: ${theme.fontSizes.buttonText};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.normal};
  transition: ${theme.transitions.quick};

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 3px;
  }
  &:active {
    border-width: 4px;
  }
  &:disabled {
    opacity: 0.6;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const MobileSliderButton = styled(SliderButton)`
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: block;
  }
`

const YellowBlock = styled.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  max-height: 70vh;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: auto 93%;
  border-radius: 3%;
  z-index: 0;

  @media screen and (max-width: 1279px) {
    aspect-ratio: 1/1.1;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    max-height: 45vh;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`

const BulletIco = styled(Bullet)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 85px;
    transform: translate(-50%);
  }
`

export {
  SliderStyled,
  YellowBlock,
  SliderContent,
  SliderButton,
  MobileSliderButton,
  Flex,
  BulletIco as Bullet,
}
