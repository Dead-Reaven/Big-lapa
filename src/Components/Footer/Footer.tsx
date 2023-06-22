import { NavLink } from 'react-router-dom'
import logo from '../../assets/svgs-footer/logo-footer.svg'
import tel from '../../assets/svgs-footer/phone.svg'
import email from '../../assets/svgs-footer/email.svg'
import insta from '../../assets/svgs-footer/insta.svg'
import fb from '../../assets/svgs-footer/fb.svg'
import Container from '../../styles/Container.style'
import { FooterSection, ListItem, Paragraph } from './Footer.style'

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <img src={logo} alt="logo-footer" />

        <ul>
          <ListItem>
            <NavLink to="about">Про притулок</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="dogs">Наші хвостики</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="contacts">Контакти</NavLink>
          </ListItem>
          <ListItem>
            <a href="path/to/confdentiality/agreement" target="_blank">
              Політика конфіденційності
            </a>
          </ListItem>
          <ListItem>
            <a href="path/to/rules" target="_blank">
              Правила поведінки на сайті
            </a>
          </ListItem>
          <ListItem>
            <a href="path/to/reports" target="_blank">
              Звітність
            </a>
          </ListItem>
        </ul>

        <ul>
          <ListItem>
            <a href="tel: +38 063 628 6630">
              <img src={tel} alt="phone icon" />
              +38 063 628 6630
            </a>
          </ListItem>
          <ListItem>
            <a href="tel: +38 067 568 1788">
              <img src={tel} alt="phone icon" />
              +38 067 568 1788
            </a>
          </ListItem>
          <ListItem>
            <a href="emailto: biglapa@gmail.com">
              <img src={email} alt="email icon" />
              biglapa@gmail.com
            </a>
          </ListItem>
        </ul>

        <ul>
          <ListItem>
            <a href="path/to/insta">
              <img src={insta} alt="instagram icon" />
            </a>
          </ListItem>

          <ListItem>
            <a href="path/to/fb">
              <img src={fb} alt="facebookicon" />
            </a>
          </ListItem>
        </ul>
        <Paragraph>
          Розробка Baza Trainee Ukraine 2023 &copy; Усі права захищені
        </Paragraph>
      </Container>
    </FooterSection>
  )
}

export default Footer
