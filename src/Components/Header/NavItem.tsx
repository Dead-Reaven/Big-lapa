import { StyledNavItem } from './Header.style'
import { NavLink } from 'react-router-dom'

interface Props {
  title: string
  to: string
  testId: string
  setExtendNavbar: any
}

function NavItem({ title, to, testId, setExtendNavbar }: Props) {
  return (
    <StyledNavItem>
      <NavLink
        to={to}
        end
        data-testid={testId}
        onClick={() => {
          setExtendNavbar((curr: boolean) => !curr)
        }}
      >
        {title}
      </NavLink>
    </StyledNavItem>
  )
}

export default NavItem
