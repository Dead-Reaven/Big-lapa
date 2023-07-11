import styled, { css } from 'styled-components'

interface Props {
  type?: string
  placeholder?: string
  className?: string
  withSvg?: boolean
  width?: string
}

function Input({ type, placeholder, className }: Props) {
  return (
    <input type={type || 'text'} placeholder={placeholder || ''} className={className} />
  )
}

const StyledInput = styled(Input)<Props>`
  width: ${({ width }) => width || '80%'};
  padding: ${({ theme }) => theme.paddings.input};
  background-color: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  ${({ withSvg }) =>
    !withSvg &&
    css`
      padding: ${({ theme }) => theme.paddings.input};
      border: 1px solid ${({ theme }) => theme.colors.yellow};
      border-radius: 4px;
    `}
`

export default StyledInput
