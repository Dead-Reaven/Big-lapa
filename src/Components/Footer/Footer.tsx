import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FooterSection,
  ListItem,
  Paragraph,
  AbsoluteLink,
  FlexWrapper,
  FlexList,
  ContactListItem,
  SocialIcons,
  StyledIcon,
  StyledInstaIcon,
  // StyledContainer,
  StyledLinksList,
  StyledContactsList,
} from './Footer.style'
import { ReactComponent as LogoIcon } from '../../assets/svgs-footer/logo-footer.svg'
import { ReactComponent as PhoneIcon } from '../../assets/svgs-footer/phone.svg'
import { ReactComponent as EmailIcon } from '../../assets/svgs-footer/email.svg'

import { theme } from '../../styles/Theme.styles'
import Container from '../../styles/Container.style'

function Footer() {
  return (
    <FooterSection>
      <Container>
        <FlexWrapper color={theme.colors.green}>
          <LogoIcon />

          <StyledLinksList>
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
              <AbsoluteLink href="path/to/confdentiality/agreement" target="_blank">
                Політика конфіденційності
              </AbsoluteLink>
            </ListItem>
            <ListItem>
              <AbsoluteLink href="path/to/rules" target="_blank">
                Правила поведінки на сайті
              </AbsoluteLink>
            </ListItem>
            <ListItem>
              <AbsoluteLink href="path/to/reports" target="_blank">
                Звітність
              </AbsoluteLink>
            </ListItem>
          </StyledLinksList>

          <StyledContactsList>
            <ContactListItem>
              <PhoneIcon />
              <p>+38 063 628 6630</p>
            </ContactListItem>
            <ContactListItem>
              <PhoneIcon />
              <p>+38 067 568 1788</p>
            </ContactListItem>
            <ContactListItem>
              <EmailIcon />
              <p>biglapa@gmail.com</p>
            </ContactListItem>

            <ContactListItem>
              <FlexList>
                <ListItem>
                  <SocialIcons href="path/to/insta">
                    <StyledInstaIcon />
                  </SocialIcons>
                </ListItem>

                <ContactListItem>
                  <SocialIcons href="path/to/fb">
                    <StyledIcon />
                  </SocialIcons>
                </ContactListItem>
              </FlexList>
            </ContactListItem>
          </StyledContactsList>
        </FlexWrapper>

        <Paragraph>
          Розробка Baza Trainee Ukraine 2023 &copy; Усі права захищені
        </Paragraph>
      </Container>
    </FooterSection>
  )
}

export default Footer
