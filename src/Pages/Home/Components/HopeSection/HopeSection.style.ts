import styled from 'styled-components'
import Container from '../../../../styles/Container.style'
import rectangle1 from './img/rectangle2.png'
import TitleH2 from '../../../../styles/TitleH2.styles'

const StyledSection = styled.section`
  padding-top: 97px;
  padding-bottom: 120px;
  @media screen and (min-width: 393px) and (max-width: 766px) {
    padding-top: 80px;
    padding-bottom: 80px;
    background: ${({ theme }) => theme.colors.background};
  }
  @media screen and (min-width: 766px) and (max-width: 1279px) {
    padding-top: 100px;
    padding-bottom: 100px;
    background: ${({ theme }) => theme.colors.background};
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding-top: 120px;
    padding-bottom: 120px;
    background: ${({ theme }) => theme.colors.background};
  }
`
const StyledContainer = styled(Container)`
  background-image: url(${rectangle1}), url(${rectangle1});
  background-repeat: no-repeat;
  background-position: 226px 99px, 84px 385px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    max-width: 393px;
    display: block;
    padding: 0 16px;
    background-image: url(${rectangle1}), url(${rectangle1});
    background-size: 272px 284px;
    background-repeat: no-repeat;
    background-position: 60% 0%, 0% 20%;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    padding: 0 40px;
    max-width: 768px;
    display: block;
    background-image: url(${rectangle1}), url(${rectangle1});
    background-size: 434px 452px;
    background-repeat: no-repeat;
    background-position: 70% 0%, 29% 34%;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    max-width: 100%;
    padding: 0 40px;
    background-image: url(${rectangle1}), url(${rectangle1});
    background-size: 381px 398px;
    background-repeat: no-repeat;
    background-position: 18% 0%, 4% 84%;
  }
`
const StyledDogList = styled.ul`
  display: flex;
  width: 576px;
  align-items: flex-start;

  flex-wrap: wrap;
  column-gap: 44px;
  padding-top: 44px;

  li:nth-child(2) {
    margin-top: 87px;
  }

  li:nth-child(4) {
    margin-top: 87px;
  }
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 361px;
    column-gap: 28px;
    padding-top: 27px;

    li:nth-child(2) {
      margin-top: 54px;
    }
    li:nth-child(4) {
      margin-top: 54px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 576px;
    column-gap: 44px;
    padding: 45px 60px 103px 32px;
    margin-left: auto;
    margin-right: auto;

    li:nth-child(2) {
      margin-top: 85px;
    }
    li:nth-child(4) {
      margin-top: 85px;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 506px;
    column-gap: 38px;
    padding: 66px 40px;
    li:nth-child(2) {
      margin-top: 76px;
    }
  }
`
const StyledImages = styled.img`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 138px;
    height: 145px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 220px;
    height: 230px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 194px;
    height: 203px;
  }
`
const StyledParagraphList = styled.ul`
  width: 624px;
  padding-top: 44px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 361px;
    margin-top: 50px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    width: 688px;
    margin-top: 60px;
    padding-top: 0;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 624px;
    padding-top: 78px;
  }
`
const StyledTitle = styled(TitleH2)`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    font-size: 40px;
    text-align: center;
    margin-bottom: 48px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    font-size: 40px;
    margin-bottom: 48px;
  }
`
const StyledP = styled.p`
  font-size: 16px;
  margin-bottom: 45px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 393px) and (max-width: 767px) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: 767px) and (max-width: 1279px) {
    font-size: 18px;
    margin-bottom: 45px;
  }
`
export {
  StyledContainer,
  StyledDogList,
  StyledParagraphList,
  StyledSection,
  StyledP,
  StyledImages,
  StyledTitle,
}
