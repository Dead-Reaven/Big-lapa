import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/logo_header.svg'
import Container from '../../styles/Container.style'
import Flex from '../../styles/Flex.styles'
import { HeaderButton, StyledHeader } from './Header.style'
import BurgerMenu from './BurgerMenu'
import HeaderRight from './HeaderRight'
import StyledBurgerBtn from './BurgerBtn'

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <StyledHeader>
      <Container paddingtop="20px" paddingbottom="20px">
        <Flex justify="space-between" align="center" gap="20px">
          <NavLink to="." end data-testid="home-link">
            <Logo />
          </NavLink>
          <BurgerMenu extendNavbar={extendNavbar} setExtendNavbar={setExtendNavbar} />
          <HeaderRight extendNavbar={extendNavbar}>
            <HeaderButton extendNavbar={extendNavbar}>Підтримати притулок</HeaderButton>
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
