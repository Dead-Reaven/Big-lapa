import Adress from './Adress'
import { styled } from 'styled-components'

const StyledAdress = styled(Adress)`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  width: 83%;
  padding: 50px 20px;
  border-radius: 5px;
  text-align: left;

  p {
    &:first-child {
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      margin-bottom: 10px;
    }
    &:nth-child(2) {
      max-width: 200px;
    }
  }
`
export default StyledAdress
