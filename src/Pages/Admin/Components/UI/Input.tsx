import { Label, StyledInput } from './Input.style'

interface Props {
  placeholder: string | undefined
  label: string
  state: string
  onChange: (e: string) => void
}

function Input(props: Props) {
  const { placeholder, label, state, onChange } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder || ''}
        value={state}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}

export default Input
