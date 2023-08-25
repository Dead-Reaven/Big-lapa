import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../../../../AuthHoc/useAuth'
import ButtonItem from './ButtonItem'
import Item from './Item'
import { StyledSideBar } from './SideBar.style'
import { ReactComponent as IcoDogCard } from './icons/DogCards.svg'
import { ReactComponent as IcoLogOut } from './icons/LogOut.svg'
import { ReactComponent as IcoPartners } from './icons/LogoPartners.svg'
import { ReactComponent as IcoPhone } from './icons/Phone.svg'
import { ReactComponent as IcoReports } from './icons/Reports.svg'
import { ReactComponent as IcoSettings } from './icons/Settings.svg'

function SideBar() {
  const { signout }: any = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const fromPage = location.state?.from?.pathname || '/login'

  const onHandlerForm = () => {
    localStorage.clear()
    signout(() => navigate(fromPage, { replace: false }))
  }

  return (
    <StyledSideBar>
      <Item link="/admin" text="Картки собак">
        <IcoDogCard />
      </Item>
      <Item link="/admin/partners" text="Партнери">
        <IcoPartners />
      </Item>
      <Item link="/admin/reports" text="Звітність">
        <IcoReports />
      </Item>
      <Item link="/admin/contacts" text="Контакти">
        <IcoPhone />
      </Item>
      <Item link="/admin/settings" text="Налаштування">
        <IcoSettings />
      </Item>
      <ButtonItem text="Вийти" onClick={onHandlerForm}>
        <IcoLogOut />
      </ButtonItem>
    </StyledSideBar>
  )
}

export default SideBar
