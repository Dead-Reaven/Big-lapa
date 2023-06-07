import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="dogs">Dogs</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  )
}

export default Menu
