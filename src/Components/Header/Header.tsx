import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from './img/logo_header.svg'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import { HeaderButton, StyledHeader } from './Header.style'
import BurgerMenu from './BurgerMenu'
import HeaderRight from './HeaderRight'
import StyledBurgerBtn from './BurgerBtn'

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <StyledHeader>
      <Container>
        <Flex justify="space-between" align="center" gap="20px">
          <NavLink to="." end data-testid="home-link">
            <Logo />
          </NavLink>
          <BurgerMenu extendNavbar={extendNavbar} setExtendNavbar={setExtendNavbar} />
          <HeaderRight extendNavbar={extendNavbar}>
            <HeaderButton $extendNavbar={extendNavbar}>
              <span>Підтримати притулок</span>
            </HeaderButton>
            <StyledBurgerBtn
              isActive={extendNavbar}
              onClick={() => {
                setExtendNavbar((curr: boolean) => !curr)
              }}
            />
          </HeaderRight>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
