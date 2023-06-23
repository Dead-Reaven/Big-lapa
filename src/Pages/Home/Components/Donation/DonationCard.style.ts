import { styled } from 'styled-components'

const StyledDonationCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 20px 0;
  &:nth-of-type(1) {
    flex: 1;
  }
  &:nth-of-type(2) {
    flex: 1.42;
  }
`

export default StyledDonationCard
