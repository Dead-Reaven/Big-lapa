import dogM from '../img/contact-us/dogM2x.png'
import { ReactComponent as IcoPhone } from '../img/contact-us/phone.svg'
import { ReactComponent as IcoMail } from '../img/contact-us/mail.svg'
import { ReactComponent as IcoMap } from '../img/contact-us/map.svg'
import Container from '../../../Components/UI/Container.style'
import {
  StyledTitleH2,
  StyledImage,
  StyledContactsList,
  StyledListItem,
  IconsDiv,
  StyledIcoFb,
  StyledIcoInsta,
  StyledContactsDiv,
  SectionWrapper,
  StyledSection,
  StyledFormDiv,
  StyledInputsDiv,
  StyledTextArea,
  RestyledInput,
  StyledButton,
} from './ContactUs.style'
import TitleH2 from '../../../Components/UI/TitleH2.styles'

function ContactUs() {
  return (
    <StyledSection>
      <Container>
        <StyledTitleH2>Контакти</StyledTitleH2>
        <SectionWrapper>
          <StyledContactsDiv>
            <StyledImage src={dogM} alt="cute dog" />

            <StyledContactsList>
              <StyledListItem>
                <IcoPhone /> <p>+38 063 628 6630</p>
              </StyledListItem>
              <StyledListItem>
                <IcoPhone /> <p>+38 063 628 6630</p>
              </StyledListItem>
              <StyledListItem>
                <IcoMail /> <p>elektronna@poshta.com</p>
              </StyledListItem>
              <StyledListItem>
                <IcoMap /> <p>Адреса: місто Львів, вул. Городоцька, 397</p>
              </StyledListItem>
            </StyledContactsList>
            <IconsDiv>
              <StyledIcoInsta />
              <StyledIcoFb />
            </IconsDiv>
          </StyledContactsDiv>
          <StyledFormDiv>
            <TitleH2 $marginBottom="24px">Зв`яжіться з нами</TitleH2>
            <p>Якщо залишилися питання, напишіть нам</p>
            <form>
              <StyledInputsDiv>
                <RestyledInput className="name" placeholder="Ім’я" />
                <RestyledInput type="email" className="email" placeholder="Пошта" />
                <StyledTextArea name="questions" placeholder="Питання"></StyledTextArea>
              </StyledInputsDiv>
              <StyledButton type="submit">Відправити</StyledButton>
            </form>
          </StyledFormDiv>
        </SectionWrapper>
      </Container>
    </StyledSection>
  )
}

export default ContactUs
