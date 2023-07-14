import { styled } from 'styled-components'
import StyledInput from '../../../../Components/UI/Input.styles'

const Input = styled(StyledInput)`
  width: 100%;
  margin-bottom: 32px;
`

const Label = styled.p`
  /* Desktop & 1280 px/Subheadline */
  font-size: 16px;
  margin-bottom: 12px;
`

export { Label, Input as StyledInput }
