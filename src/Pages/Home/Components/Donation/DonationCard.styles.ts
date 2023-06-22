import { styled } from 'styled-components'

const StyledDonationCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  p {
    text-align: center;
  }
`

// const Grid = styled.div`
//   display: grid;

// `

export default StyledDonationCard
