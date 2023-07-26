import NavBar from './NavBar'
import { StyledBurgerMenu } from './Header.style'

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
      $extendNavbar={extendNavbar}
    >
      <NavBar setExtendNavbar={setExtendNavbar} />
    </StyledBurgerMenu>
  )
}

export default BurgerMenu
