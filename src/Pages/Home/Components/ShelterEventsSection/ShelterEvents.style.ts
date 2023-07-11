import styled from 'styled-components'
import dog from './img/shelter-events.png'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import StyledInput from '../../../../Components/UI/Input.styles'
import Button from '../../../../Components/UI/Button.styles'
import Container from '../../../../Components/UI/Container.style'

const StyledSection = styled.section`
  background-image: url(${dog});
  background-repeat: no-repeat;
  background-position: right bottom;
  padding-top: 120px;
  padding-bottom: 90px;

  @media screen and (max-width: 1279px) {
    padding: 100px 0;
    background-image: none;
  }

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`

const StyledContainer = styled(Container)`
  @media (max-width: 1279px) {
    padding: 0 72px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`

const StyledTitle = styled(TitleH2)`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
`

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  @media (max-width: 1279px) {
    margin-bottom: 16px;
  }
`

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-bottom: 28px;
  }
`

const FormInput = styled(StyledInput)`
  width: 444px;
  height: 56px;
  display: inline-block;
  &:invalid {
    border-color: #ff4141;
    background-color: #ffebeb;
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
  &:disabled {
    border: none;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: 361px;
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
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`
export {
  StyledSection,
  StyledContainer,
  StyledTitle,
  StyledParagraph,
  StyledText,
  FormInput,
  StyledForm,
  StyledButton,
}
