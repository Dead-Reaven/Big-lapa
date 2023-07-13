import { NavLink } from 'react-router-dom'
import { StyledHeader, Icon } from './AdminHeader.style'

function AdminHeader() {
  return (
    <StyledHeader>
      <NavLink to="." end>
        <Icon />
      </NavLink>
      Адміністративна панель
    </StyledHeader>
  )
}

export default AdminHeader
