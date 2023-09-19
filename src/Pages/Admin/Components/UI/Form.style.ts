import { styled } from 'styled-components'
import Button from '../../../../Components/UI/Button.styles'
import Container from '../../../../Components/UI/Container.style'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'

const Form = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const FormButton = styled(Button)`
  width: 100%;
`

const FormContainer = styled(Container)`
  width: 100%;
  max-width: 400px;
  padding: 0;
`

const FormH2 = styled(TitleH2)`
  width: 100%;
  text-align: center;
`

const ErrorValid = styled.div`
  padding: 1px;
  color: var(--grey, #acabab);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  bottom: 21px;
`

export { ErrorValid, Form, FormButton, FormContainer, FormH2 }
