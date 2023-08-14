import styled, { css } from 'styled-components'

interface Props {
  type?: string
  withSvg?: boolean
  width?: string
  onChange?: (e: any) => void
  iserror?: boolean | string
  changecolor?: boolean
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
  ${({ iserror }) =>
    iserror &&
    css`
      border-radius: 4px;
      border: 2px solid #ff4141;
      background: #ffebeb;
    `}
    ${({ changecolor }) =>
    !changecolor &&
    css`
      border-radius: 4px;
      border: 2px solid #e8b535;
      background: #f9f9f9;
    `}
`

export default StyledInput
