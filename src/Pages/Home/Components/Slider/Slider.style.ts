import { theme } from '../../../../styles/Theme.styles'
import styled from 'styled-components'
import mainPhoto from '../../../../assets/img/main_photo.png'
import Container from '../../../../styles/Container.style'
import { ReactComponent as Bullet } from '../../../../assets/img/bullet_first.svg'

const SliderStyled = styled.div`
  height: calc(100vh - 96px);
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
`

const TextContainer = styled.div`
  width: 50%;
  padding: 0 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10%;
`

const H1 = styled.h1`
  font-size: calc(30px + 0.8vw);
  font-weight: 700;
  line-height: 120%;
  text-align: left;

  @media screen and (min-width: 1440px) {
    font-size: 54px;
  }
`

const SubText = styled.h3`
  font-size: calc(11px + 0.6vw);
  line-height: 140%;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`
const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-height: 850px) and (max-width: 1440px) {
    /* flex-direction: column; */
  }
`

const YellowBlock = styled.div`
  width: 50%;
  height: 100%;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: contain;
  border-radius: 3%;
  z-index: 0;

  @media screen and (min-width: 768px) {
    width: 50%;
    height: auto;
    min-height: 100%;
  }
`
const BulletIco = styled(Bullet)`
  position: absolute;
  bottom: 0;
  z-index: 1;
  @media screen and (max-width: 767px) {
    left: 50%;
    transform: translate(-50%);
  }
  @media (max-height: 500px) and (min-width: 768px) {
    left: calc(75% + 5.83%);
    transform: translate(calc(-75% - 5.83%));
  }
`

const StyledContainer = styled(Container)`
  height: 100%;
  padding: 7vh 5.83%;
  position: relative;
  @media screen and (min-width: 1440px) {
    padding: calc(25px + 3%) 84px;
  }
  @media screen and (min-height: 770px) and (max-width: 1200px) {
    padding: calc(25px + 10vh) 5.83%;
  }

  /* phone */
  @media screen and (max-width: 767px) {
    padding: calc(25px + 1vw) 5.83% calc(15px + 1vw);
    ${Flex} {
      flex-direction: column;
      align-items: center;
      justify-items: center;
      position: relative;

      ${TextContainer} {
        height: 100%;
        width: 100%;
        padding: 0;
        gap: 5%;

        & ${H1}, ${SubText} {
          width: 100%;
          text-align: center;
        }
        ${H1} {
          font-size: calc(15px + 3.5vw);
          padding: 0;
        }
        ${SubText} {
          font-size: calc(8px + 1.5vw);
        }
      }

      ${YellowBlock} {
        position: static;
        z-index: 0;
        width: 100%;
        height: 100%;
        min-height: 0;
      }
    }
  }
`

export {
  SliderStyled,
  YellowBlock,
  SubText,
  H1,
  TextContainer,
  StyledContainer,
  Flex,
  BulletIco as Bullet,
}
