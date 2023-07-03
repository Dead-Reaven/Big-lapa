import NavBar from './NavBar'
import DogSearch from './DogSearch'
import { StyledBurgerMenu, BurgerMenuButton } from './Header.style'

interface Props {
  className?: string
  extendNavbar?: boolean
  setExtendNavbar?: any
}

function BurgerMenu({ className, extendNavbar, setExtendNavbar }: Props) {
  return (
    <StyledBurgerMenu
      align="center"
      justify="space-between"
      gap="10px"
      className={className}
      extendNavbar={extendNavbar}
    >
      <BurgerMenuButton>Підтримати притулок</BurgerMenuButton>
      <NavBar setExtendNavbar={setExtendNavbar} />
      <DogSearch />
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
