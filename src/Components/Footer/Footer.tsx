import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ContactTypes } from '../../API/types/types'
import useGet from '../../API/useGet'
import {
  AbsoluteLink,
  ContactItem,
  ContactListItem,
  FlexList,
  FlexWrapper,
  FooterSection,
  ListItem,
  Paragraph,
  SocialIcons,
  StyledContactsList,
  StyledIcon,
  StyledInstaIcon,
  StyledLinksList,
} from './Footer.style'
import { ReactComponent as EmailIcon } from './svgs-footer/email.svg'
import { ReactComponent as LogoIcon } from './svgs-footer/logo-footer.svg'
import { ReactComponent as PhoneIcon } from './svgs-footer/phone.svg'

import Container from '../UI/Container.style'
import { theme } from '../UI/Theme.styles'

function Footer() {
  const [contactsState, setContactsState] = useState<ContactTypes>({
    email: '',
    first_phoneNumber: '',
    second_phoneNumber: '',
  })

  useGet({
    category: 'contacts',
    state: contactsState,
    setState: setContactsState,
  }) as ContactTypes

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
              <NavLink to="dogs">Наші хвости</NavLink>
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
              <ContactItem>
                <a href={`tel:${contactsState?.first_phoneNumber}`}>
                  {contactsState?.first_phoneNumber}
                </a>
              </ContactItem>
            </ContactListItem>
            <ContactListItem>
              <PhoneIcon />
              <ContactItem>
                <a href={`tel:${contactsState?.second_phoneNumber}`}>
                  {contactsState?.second_phoneNumber}
                </a>
              </ContactItem>
            </ContactListItem>
            <ContactListItem>
              <EmailIcon />
              <ContactItem>
                <a href={`mailto:${contactsState?.email}`}>{contactsState?.email}</a>
              </ContactItem>
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
