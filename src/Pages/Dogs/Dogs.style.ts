import styled from 'styled-components'
import { StyledDogSearch } from '../../Components/DogSearch/DogSearch.style'

const DogsStyled = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: ${({ theme }) => theme.headerHeight};

  ${StyledDogSearch} {
    margin-bottom: 110px;

    @media (max-width: 1279px) {
      margin-bottom: 90px;
    }

    @media (max-width: 767px) {
      margin-bottom: 70px;
    }
  }
`

export { DogsStyled }
