import { theme } from '../../../../Components/UI/Theme.styles'
import styled from 'styled-components'
import mainPhoto from './img/main_photo.png'
import { ReactComponent as Bullet } from './img/bullet_first.svg'
import Container from '../../../../Components/UI/Container.style'

const SliderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.background};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    url(${mainPhoto}) center/cover no-repeat;

  @media screen and (max-width: 767px) {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
      url(${mainPhoto}) center/cover no-repeat;
  }

  ${Container} {
    height: calc(100vh - 96px);
    display: flex;
    align-items: center;
  }
`

const SliderContent = styled.div`
  max-width: 624px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 1279px) {
    flex: 0 0 48%;
  }
  @media screen and (max-width: 767px) {
    height: 65%;
    position: absolute;
    bottom: 18px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    flex: 100%;
    text-align: center;
    align-items: center;
    justify-content: space-between;
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
`

const BulletIco = styled(Bullet)`
  position: absolute;
  bottom: 44px;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    bottom: 130px;
    transform: translate(-50%);
  }
`

export { SliderStyled, SliderContent, SliderButton, BulletIco as Bullet }
