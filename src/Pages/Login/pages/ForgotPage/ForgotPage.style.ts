import styled from 'styled-components'
import { FormH2 } from '../../../Admin/Components/UI/Form.style'

const FormP = styled.p`
  color: var(--dark, #2e2e2e);
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 35px;
`
const ForgotButton = styled.button`
  color: var(--grey, #acabab);
  font-family: Open Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: 265px;
  bottom: 25px;
`
const MyStyled = styled(FormH2)`
  color: red;
`

export { ForgotButton, FormP, MyStyled }
