import { styled, css } from 'styled-components'
import Button from '../UI/Button.styles'

interface CookiesProps {
  $scrolledToBottom: boolean
}

const StyledCookies = styled.div<CookiesProps>`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  transition: all ease 0.5s;
  padding: 15px 0;
  margin-bottom: 0;
  position: fixed;
  bottom: 0;
  z-index: 5;

  p {
    font-size: 1rem;
    text-align: left;

    a {
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      text-decoration: underline;
    }
  }

  ${({ $scrolledToBottom }) =>
    $scrolledToBottom &&
    css`
      margin-bottom: 100px;
    `}

  ${Button} {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    padding: 24px;
  }

  @media (max-width: 767px) {
    padding: 20px 0;
    p {
      font-size: 0.75rem;
    }
  }
`
export { StyledCookies }
