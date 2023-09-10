import { NavLink } from 'react-router-dom'
import { NamePosition, StyledHeader } from './AdminHeader.style'
import { ReactComponent as Logo } from './logo_header.svg'

function AdminHeader() {
  const userName = localStorage.getItem('user_name')
  return (
    <StyledHeader>
      <NavLink to="." end>
        <Logo />
      </NavLink>
      <NamePosition>{userName}</NamePosition>
    </StyledHeader>
  )
}

export default AdminHeader
