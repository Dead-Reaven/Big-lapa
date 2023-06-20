import { styled } from 'styled-components'

const NavItem = styled.span`
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`

export default NavItem
