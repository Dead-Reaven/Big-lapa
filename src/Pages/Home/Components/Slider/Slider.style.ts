import { theme } from '../../../../Components/UI/Theme.styles'
import styled from 'styled-components'
import { ReactComponent as Bullet } from './img/bullet_first.svg'
import webpImage from '../../../../Assets/Sliders/1.webp'

const SliderStyled = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${theme.colors.background};
  background: url(${webpImage}) no-repeat center top;
  background-size: cover;

  * {
    text-align: center;
  }
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

const TextContainer = styled.div``

const BulletIco = styled(Bullet)`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%);
  bottom: 25px;

  @media screen and (min-width: 768px) {
    bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 60px;
  }
  @media screen and (min-width: 1440px) {
    bottom: 68.5px;
  }
`

export { SliderStyled, TextContainer, Flex, BulletIco as Bullet }
