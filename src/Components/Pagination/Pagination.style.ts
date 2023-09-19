import { styled } from 'styled-components'
import { theme } from '../UI/Theme.styles'

const Pagination = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.dark};
  padding: 15px 60px;
  border-radius: 4px;
  font-size: ${theme.fontSizes.buttonText};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.normal};
  transition: ${theme.transitions.quick};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    border-width: 2px;
  }
  &:disabled {
    opacity: 0.6;
  }
`

const PaginationNav = styled.ul`
  display: flex;
  gap: 24px;

  li {
    color: ${theme.colors.lightGrey};
    font-size: 24px;

    &:hover {
      transition: ${theme.transitions.quick};
      cursor: pointer;
      color: ${theme.colors.dark};
    }
  }
`
const ActivePageNumber = styled.button`
  color: ${theme.colors.dark};
`
const InactivePageNumber = styled.button`
  color: ${theme.colors.lightGrey};
`
export {
  Pagination,
  PaginationButton,
  PaginationNav,
  ActivePageNumber,
  InactivePageNumber,
}
