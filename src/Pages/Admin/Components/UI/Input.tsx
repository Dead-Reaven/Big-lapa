import { Label, StyledInput } from './Input.style'

interface Props {
  placeholder: string | undefined
  label: string
  onChange?: (e: any) => void
  value?: string
}
function Input(props: Props) {
  const { placeholder, label, onChange, value } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput placeholder={placeholder || ''} onChange={onChange} value={value} />
    </>
  )
}

export default Input
