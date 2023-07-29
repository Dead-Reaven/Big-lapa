import { Label, StyledInput } from './Input.style'

interface Props {
  placeholder: string | undefined
  label: string
  onChange: (e: any) => void
  state: string
}
function Input(props: Props) {
  const { placeholder, label, onChange, state } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder || ''}
        onChange={(e) => onChange(e.target.value)}
        value={state}
      />
    </>
  )
}

export default Input
