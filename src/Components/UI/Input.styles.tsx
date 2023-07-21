import styled, { css } from 'styled-components'

interface Props {
  type?: string
  withSvg?: boolean
  width?: string
}

const StyledInput = styled.input<Props>`
  width: ${({ width }) => width || '80%'};
  padding: ${({ theme }) => theme.paddings.input};
  background-color: ${({ theme }) => theme.colors.background};
  caret-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.dark};
  ${({ withSvg }) =>
    !withSvg &&
    css`
      padding: ${({ theme }) => theme.paddings.input};
      outline: 1px solid ${({ theme }) => theme.colors.yellow};
      border-radius: 4px;
      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.yellow};
      }
    `}
`

export default StyledInput
