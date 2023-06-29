import styled from 'styled-components'
import dog from '../../../../assets/shelterEvents/shelter-events.png'
import TitleH2 from '../../../../styles/TitleH2.styles'

import StyledInput from '../../../../styles/Input.styles'
const StyledSection = styled.section`
  background-image: url(${dog});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: auto auto;
  padding-top: 120px;
  padding-bottom: 91px;
`
const StyledTitle = styled(TitleH2)`
  text-align: center;
  margin-bottom: 29px;
`

const StyledParagraph = styled.p`
  text-align: center;
  margin-bottom: 29px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`
const StyledText = styled.p`
  text-align: center;
  margin-bottom: 40px;
`
const FormInput = styled(StyledInput)`
  width: 444px;
  display: inline-block;
  border-color: ${({ theme }) => theme.colors.lightYellow};
  &: invalid {
    border-color: #ff4141;
    background-color: #ffebeb;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.yellow};
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 40px;
`
export { StyledSection, StyledTitle, StyledParagraph, StyledText, FormInput, StyledForm }
