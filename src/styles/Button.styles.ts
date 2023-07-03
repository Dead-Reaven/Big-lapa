import { styled } from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: ${({ theme }) => theme.paddings.button};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    background-color: ${({ theme }) => theme.colors.midYellow};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.yellow};
    border: 2px ${({ theme }) => theme.colors.midYellow};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightYellow};
  }

  @media (max-width: 1000px) {
    font-size: ${({ theme }) => theme.fontSizes.mobileButtonText};
  }
  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.paddings.buttonTablet};
    padding: ${({ theme }) => theme.paddings.butonMobile};
  }
`
export default Button
