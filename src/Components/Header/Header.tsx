import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo_header.svg'
import Container from '../../styles/Container.style'
import Flex from '../../styles/Flex.styles'
import NavBar from './NavBar'
import StyledButton from '../../styles/Button.styles'
import DogSearch from './DogSearch'

const Header = () => {
  return (
    <header>
      <Container>
        <Flex justify="space-between" align="center" height="96px">
          <NavLink to="." end data-testid="home-link">
            <img alt="logo" src={logo} />
          </NavLink>
          <NavBar />
          <DogSearch />
          <StyledButton>Підтримати притулок</StyledButton>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
