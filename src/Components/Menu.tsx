import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Home
      </NavLink>
      <NavLink to="dogs">Dogs</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="support">Support</NavLink>
      <a> not working test nav</a>
    </nav>
  )
}

export default Menu
