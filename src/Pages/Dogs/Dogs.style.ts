import styled from 'styled-components'

const DogsStyled = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: ${({ theme }) => theme.headerHeight};
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media (max-width: 1279px) {
    gap: 100px;
  }

  @media (max-width: 767px) {
    gap: 80px;
  }
`

export { DogsStyled }
