import { theme } from '../../../../styles/Theme.styles'
import styled from 'styled-components'
import mainPhoto from '../../../../assets/img/main_photo.png'
import Container from '../../../../styles/Container.style'

const SliderStyled = styled.div`
  height: calc(100vh - 96px);
  color: ${theme.colors.background};
  background-color: ${theme.colors.green};
`
const TextContainer = styled.pre`
  width: 49%;
  padding: 10% 1% 0 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  flex: auto 1 0;
  gap: 10%;
  word-wrap: break-word;
  & svg {
    display: inline-block;
    z-index: 99;
  }
`

const H1 = styled.h1`
  font-size: 3.8vw;
  /* max-width: 54px; */
  font-weight: 700;
  line-height: 120%;
  @media screen and (min-width: 1440px) {
    font-size: 54px;
  }
  @media screen and (min-width: 300px) and (max-width: 767px) {
    font-size: 6vw;
  }
`

const SubText = styled.h3`
  display: flex;
  flex: auto 1 0;
  font-size: 1.25vw;
  line-height: 140%;
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1050px) and (max-width: 1200px) {
    font-size: 1.4vw;
  }
  @media screen and (min-width: 850px) and (max-width: 1050px) {
    font-size: 1.45vw;
  }
  @media screen and (min-width: 768px) and (max-width: 850px) {
    font-size: 1.5vw;
  }
  @media screen and (min-width: 300px) and (max-width: 767px) {
    display: block;
    font-size: 2.3vw;
  }
`

const YellowBlock = styled.div`
  width: 49%;
  height: 100%;
  background: ${theme.colors.yellow} url(${mainPhoto}) bottom no-repeat;
  background-size: contain;
  border-radius: 3%;
  z-index: 0;
`
const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
`

const StyledContainer = styled(Container)`
  height: 100%;
  padding: 2.5% 5.83%;
  @media screen and (min-width: 1440px) {
    padding: 40px 84px;
  }

  @media screen and (min-width: 1050px) and (max-width: 1200px) {
    & {
      padding: 5% 5.83%;
    }
  }
  @media screen and (min-width: 850px) and (max-width: 1050px) {
    & {
      padding: 7% 5.83%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 850px) {
    & {
      padding: 9% 5.83%;
    }
    ${H1} {
      padding-top: 15%;
    }
  }
  @media screen and (min-width: 300px) and (max-width: 767px) {
    padding: calc(25px + 1vw) 5.83% calc(15px + 1vw);
    ${Flex} {
      flex-direction: column;
      align-items: center;
      justify-items: center;
      position: relative;
      ${TextContainer} {
        text-align: center;
        height: 100%;
        width: 100%;
        padding: 0;
        position: relative;
        gap: 5%;
        ${H1} {
          width: 100%;
          font-size: calc(20px + 3vw);
          padding: 0;
        }
        ${SubText} {
          font-size: calc(8px + 1vw);
        }
        svg {
          align-self: center;
          margin-bottom: 1%;
        }
      }

      ${YellowBlock} {
        position: absolute;
        bottom: 0px;
        z-index: 0;
        width: 100%;
        height: 60%;
      }
    }
  }
`

export { SliderStyled, YellowBlock, SubText, H1, TextContainer, StyledContainer, Flex }
