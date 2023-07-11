import { styled } from 'styled-components'
import Button from '../../styles/Button.styles'

interface Props {
  isShow: boolean
}

const StyledCookies = styled.div<Props>`
  ${({ isShow }) => !isShow && 'display: none;'}
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 48px 0;
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
