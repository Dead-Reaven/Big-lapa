import { NavLink } from 'react-router-dom'
import { Icon, NamePosition, StyledHeader } from './AdminHeader.style'

function AdminHeader() {
  const userName = localStorage.getItem('user_name')
  return (
    <StyledHeader>
      <NavLink to="." end>
        <Icon />
      </NavLink>
      Адміністративна панель
      <NamePosition>{userName}</NamePosition>
    </StyledHeader>
  )
}

export default AdminHeader
