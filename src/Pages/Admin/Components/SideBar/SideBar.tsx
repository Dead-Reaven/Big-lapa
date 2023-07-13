import Item from './Item'
import { StyledSideBar } from './SideBar.style'
import { ReactComponent as IcoDogCard } from './icons/DogCards.svg'
import { ReactComponent as IcoPartners } from './icons/LogoPartners.svg'
import { ReactComponent as IcoSliders } from './icons/SliderImg.svg'
import { ReactComponent as IcoReports } from './icons/Reports.svg'
import { ReactComponent as IcoPhone } from './icons/Phone.svg'
import { ReactComponent as IcoSettings } from './icons/Settings.svg'
import { ReactComponent as IcoLogOut } from './icons/LogOut.svg'

function SideBar() {
  return (
    <StyledSideBar>
      <Item link="admin" text="Картки собак">
        <IcoDogCard />
      </Item>
      <Item link="admin/partners" text="Партнери">
        <IcoPartners />
      </Item>
      <Item link="admin/sliders" text="Слайдери">
        <IcoSliders />
      </Item>
      <Item link="admin/reports" text="Звітність">
        <IcoReports />
      </Item>
      <Item link="admin/contacts" text="Контакти">
        <IcoPhone />
      </Item>
      <Item link="admin/settings" text="Налаштування">
        <IcoSettings />
      </Item>
      <Item link="/logout" text="Log out">
        <IcoLogOut />
      </Item>
    </StyledSideBar>
  )
}

export default SideBar
