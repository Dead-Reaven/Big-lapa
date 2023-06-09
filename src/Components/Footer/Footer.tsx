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
  StyledLinksList,
  StyledContactsList,
  ContactItem,
} from './Footer.style'
import { ReactComponent as LogoIcon } from './svgs-footer/logo-footer.svg'
import { ReactComponent as PhoneIcon } from './svgs-footer/phone.svg'
import { ReactComponent as EmailIcon } from './svgs-footer/email.svg'

import { theme } from '../UI/Theme.styles'
import Container from '../UI/Container.style'

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
              <ContactItem>+38 063 628 6630</ContactItem>
            </ContactListItem>
            <ContactListItem>
              <PhoneIcon />
              <ContactItem>+38 067 568 1788</ContactItem>
            </ContactListItem>
            <ContactListItem>
              <EmailIcon />
              <ContactItem>biglapa@gmail.com</ContactItem>
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
