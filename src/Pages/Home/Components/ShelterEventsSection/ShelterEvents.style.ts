import styled from 'styled-components'
import dog from '../../../../assets/shelterEvents/shelter-events.png'
import TitleH2 from '../../../../styles/TitleH2.styles'
import Container from '../../../../styles/Container.style'
import StyledInput from '../../../../styles/Input.styles'
import Button from '../../../../styles/Button.styles'

const StyledSection = styled.section`
  @media (max-width: 767px) {
    background: ${({ theme }) => theme.colors.background};
    padding-top: 80px;
    padding-bottom: 80px;
  }
  @media screen and (min-width: 766px) and (max-width: 1279px) {
    background: ${({ theme }) => theme.colors.background};
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1440px) {
    background-image: url(${dog});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto auto;
    padding-top: 120px;
  }
  @media (min-width: 1440px) {
    background-image: url(${dog});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto auto;
    padding-top: 120px;
  }
`
const StyledContainer = styled(Container)`
  @media (max-width: 767px) {
    padding: 40px 4% 40px 4%;
  }
  @media screen and (min-width: 768px) and (max-width: 1278px) {
    padding: 76px 72px 76px 72px;
  }
  @media (min-width: 1279px) {
    max-width: 100%;
    padding: 60px 15% 91px 15%;
  }
`
const StyledTitle = styled(TitleH2)`
  @media (max-width: 767px) {
    text-align: center;
    font-size: 32px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    text-align: center;
    font-size: 40px;
    margin-bottom: 29px;
  }
  @media (min-width: 1279px) {
    text-align: center;
    margin-bottom: 29px;
  }
`

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  @media (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 16px;
    font-size: 18px;
  }
`
const StyledText = styled.p`
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 393px) and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 18px;
    margin-bottom: 40px;
  }
`
const FormInput = styled(StyledInput)`
  border-color: ${({ theme }) => theme.colors.lightYellow};
  &:invalid {
    border-color: #ff4141;
    background-color: #ffebeb;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.yellow};
  }
  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
    height: 56px;
    margin-bottom: 32px;
    padding: 22px 12px 22px 12px;
    &::placeholder {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 766px) and (max-width: 1279px) {
    width: 444px;
    height: 56px;
    padding: 21px 12px 21px 12px;
    &::placeholder {
      font-size: 18px;
    }
  }
  @media (min-width: 1279px) {
    width: 444px;
    display: inline-block;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media (max-width: 767px) {
    display: block;
    text-align: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1278px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  @media screen and (min-width: 1279px) and (max-width: 1440px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`
export {
  StyledSection,
  StyledTitle,
  StyledParagraph,
  StyledText,
  FormInput,
  StyledForm,
  StyledContainer,
  StyledButton,
}
