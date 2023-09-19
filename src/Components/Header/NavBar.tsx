import { StyledNavBar, NavFlex } from './Header.style'
import NavItem from './NavItem'

interface Props {
  setExtendNavbar?: any
}

const navItems = [
  {
    id: Math.random().toString(),
    title: 'Про притулок',
    to: 'about',
    testId: 'about-link',
  },
  {
    id: Math.random().toString(),
    title: 'Наші хвости',
    to: 'dogs',
    testId: 'dogs-link',
  },
  {
    id: Math.random().toString(),
    title: 'Контакти',
    to: 'contacts',
    testId: 'contacts-link',
  },
]

const NavBar = ({ setExtendNavbar }: Props) => {
  return (
    <StyledNavBar>
      <ul>
        <NavFlex $gap="20px">
          {navItems.map((item) => (
            <NavItem
              title={item.title}
              key={item.id}
              to={item.to}
              testId={item.testId}
              setExtendNavbar={setExtendNavbar}
            />
          ))}
        </NavFlex>
      </ul>
    </StyledNavBar>
  )
}

export default NavBar
