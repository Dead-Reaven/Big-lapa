import { styled } from 'styled-components'
import TitleH2 from '../../../../styles/TitleH2.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'
import Container from '../../../../styles/Container.style'

const StyledSection = styled.section`
  padding-bottom: 120px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    padding-bottom: 120px;
  }
`
const StyledContainer = styled(Container)`
  @media screen and (min-width: 393px) and (max-width: 767px) {
    padding: 0 16px 0 16px;
    max-width: 393px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 0 126px;
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    max-width: 100%;
    padding: 0 112px;
  }
`
const StyledTitle = styled(TitleH2)`
  text-align: center;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 40px;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    font-size: 40px;
    margin-bottom: 60px;
  }
`
const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    display: block;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`
const CardDiv = styled.div`
  width: 526px;
  text-align: center;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 361px;

    &:first-child {
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 516px;

    &:first-child {
      margin-bottom: 24px;
    }
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 516px;
  }
`
const StyledImg = styled.img`
  border-radius: 4px 4px 0 0;
  width: 526px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 361px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 516px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 516px;
  }
`
const StyledTextDiv = styled.div`
  width: 526px;
  height: 149px;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 20px 20px 20px;
  border-radius: 0 0 4px 4px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    width: 361px;
    height: 135px;
    padding: 24px 12px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 516px;
    height: 151px;
    padding: 24px 20px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    width: 516px;
    height: 150px;
    padding: 24px 20px;
  }
`

const StyledTitle3 = styled(TitleH3)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.background};
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    font-size: 24px;
  }
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.background};
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    font-size: 18px;
  }
`
export {
  StyledSection,
  FlexContainer,
  CardDiv,
  StyledTitle,
  StyledTextDiv,
  StyledImg,
  StyledTitle3,
  StyledParagraph,
  StyledContainer,
}
