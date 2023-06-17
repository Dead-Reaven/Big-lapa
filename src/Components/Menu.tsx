import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <nav>
      <NavLink to="." end data-testid="home-link">
        Home
      </NavLink>
      <NavLink to="dogs" data-testid="dogs-link">
        Dogs
      </NavLink>
      <NavLink to="about" data-testid="about-link">
        About
      </NavLink>
      <NavLink to="support" data-testid="support-link">
        Support
      </NavLink>
    </nav>
  )
}

export default Menu
