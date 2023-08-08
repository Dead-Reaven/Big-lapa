import { Label, StyledInput } from './Input.style'

interface Props {
  placeholder: string | undefined
  label: string
  onChange: (e: any) => void
  state: string
  onBlur?: () => void
  iserror?: boolean | string
  changecolor?: boolean
}
function Input(props: Props) {
  const { placeholder, label, onChange, state, onBlur, iserror, changecolor } = props

  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        placeholder={placeholder || ''}
        onChange={(e: any) => onChange(e.target.value)}
        value={state}
        onBlur={onBlur}
        iserror={iserror?.toString()}
        changecolor={changecolor}
      />
    </>
  )
}

export default Input
