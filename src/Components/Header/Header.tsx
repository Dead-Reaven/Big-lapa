import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/img/logo_header.svg'
import Container from '../../styles/Container.style'
import Flex from '../../styles/Flex.styles'
import NavBar from './NavBar'
import StyledButton from '../../styles/Button.styles'
import DogSearch from './DogSearch'

const Header = () => {
  return (
    <header style={{ maxHeight: '96px' }}>
      <Container paddingtop="20px" paddingbottom="20px">
        <Flex justify="space-between" align="center">
          <NavLink to="." end data-testid="home-link">
            <Logo />
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
