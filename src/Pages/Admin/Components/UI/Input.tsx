import { Label, StyledInput } from './Input.style'

interface Props {
  placeholder: string | undefined
  label: string
}

function Input(props: Props) {
  const { placeholder, label } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput placeholder={placeholder || ''} />
    </>
  )
}

export default Input
