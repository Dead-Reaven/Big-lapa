import { ReactNode } from 'react'
import { LabelStyled, LabelTitle } from './Dog.style'

interface Props {
  text?: string
  value?: string
  children?: ReactNode
}
function Label({ text, value, children }: Props) {
  return (
    <div>
      <LabelTitle>{text}</LabelTitle>
      <LabelStyled>
        {children}
        {value}
      </LabelStyled>
    </div>
  )
}

export default Label
