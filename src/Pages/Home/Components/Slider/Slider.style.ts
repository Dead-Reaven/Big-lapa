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
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 31px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  flex: 0 0 60%;
  max-width: 624px;
  display: flex;
  flex-direction: column;
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

const YellowBlock = styled.div`
  flex: 0 1 50%;
  aspect-ratio: 1/1;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: contain;
  border-radius: 3%;
  z-index: 0;

  @media screen and (max-width: 1279px) {
    aspect-ratio: 1/1.1;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    aspect-ratio: 1.1/1;
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
    bottom: 14px;
    transform: translate(-50%);
  }
`

export { SliderStyled, YellowBlock, TextContainer, Flex, BulletIco as Bullet }
