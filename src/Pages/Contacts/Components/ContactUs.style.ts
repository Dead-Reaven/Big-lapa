import { styled } from 'styled-components'
import TitleH2 from '../../../Components/UI/TitleH2.styles'
import { ReactComponent as IcoFb } from '../img/contact-us/fb.svg'
import { ReactComponent as IcoInsta } from '../img/contact-us/insta.svg'
import StyledInput from '../../../Components/UI/Input.styles'
import Button from '../../../Components/UI/Button.styles'

const StyledSection = styled.section`
  margin-bottom: 80px;
  @media (min-width: 767px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1279px) {
    margin-bottom: 80px;
  }
`
const StyledTitleH2 = styled(TitleH2)`
  text-align: center;
  margin-bottom: 60px;
`
const StyledImage = styled.img`
  width: 100%;
  max-width: 766px;
  @media (min-width: 767px) {
    width: 100%;
    max-width: 1200px;
  }
  @media (min-width: 1279px) {
    width: 100%;
    max-height: 356px;
  }
`
const StyledContactsList = styled.ul`
  margin: 38px 14px 0;
  @media (min-width: 767px) {
    margin: 38px 32px 0;
  }
  @media (min-width: 1279px) {
    margin: 24px 32px 0;
  }
  @media (min-width: 1439px) {
    margin: 38px 32px 0;
  }
`
const StyledListItem = styled.li`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`
const IconsDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 14px;
  @media (min-width: 767px) {
    margin-left: 32px;
  }
  @media (min-width: 1279px) {
    margin-left: 32px;
  }
`
const StyledIcoFb = styled(IcoFb)`
  &:hover path {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`

const StyledIcoInsta = styled(IcoInsta)`
  &:hover path {
    fill: ${({ theme }) => theme.colors.yellow};
  }
`

const StyledContactsDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding-bottom: 64px;
  @media (min-width: 1279px) {
    min-width: 588px;
    flex-basis: 100%;
  }
  @media (min-width: 1439px) {
    min-width: 622px;
    flex-basis: 100%;
  }
`
const StyledFormDiv = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 40px 14px 64px;
  @media (min-width: 767px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1279px) {
    padding-left: 32px;
    padding-right: 32px;
    min-width: 588px;
    flex-basis: 100%;
  }
  @media (min-width: 1439px) {
    min-width: 622px;
    flex-basis: 100%;
  }
`

const StyledInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 44px;
`
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 61px;
  @media (min-width: 1279px) {
    flex-direction: row;
    gap: 24px;
  }
`
const RestyledInput = styled(StyledInput)`
  width: 100%;
`
const StyledTextArea = styled.textarea`
  width: 100%;
  height: 175px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 4px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
`
const StyledButton = styled(Button)`
  width: 100%;
`
export {
  StyledTitleH2,
  StyledImage,
  StyledContactsList,
  StyledListItem,
  IconsDiv,
  StyledIcoFb,
  StyledIcoInsta,
  StyledContactsDiv,
  SectionWrapper,
  StyledSection,
  StyledFormDiv,
  StyledInputsDiv,
  StyledTextArea,
  RestyledInput,
  StyledButton,
}
