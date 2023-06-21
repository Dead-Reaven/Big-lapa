import { NavLink } from 'react-router-dom'
import Flex from '../../styles/Flex.styles'
import NavItem from './NavItem.style'

const NavBar = () => {
  return (
    <nav>
      <Flex gap="20px">
        <NavItem>
          <NavLink to="about" end data-testid="about-link">
            Про притулок
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="dogs" data-testid="dogs-link">
            Наші хвости
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="contacts" data-testid="contacts-link">
            Контакти
          </NavLink>
        </NavItem>
      </Flex>
    </nav>
  )
}

export default NavBar
