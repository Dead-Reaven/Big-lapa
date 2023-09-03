import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import getMainContact from '../../../API/fetchers/getMainContact'
import postMainContact from '../../../API/fetchers/postMainContact'
import { ContactTypes } from '../../../API/types'
import dogM from '../../../Assets/Contacts/contacts photo.webp'
import Container from '../../../Components/UI/Container.style'
import TitleH2 from '../../../Components/UI/TitleH2.styles'
import { ErrorValid } from '../../Admin/Components/UI/Form.style'
import { validationHook } from '../../Login/validSetting'
import { ReactComponent as IcoMail } from '../img/contact-us/mail.svg'
import { ReactComponent as IcoMap } from '../img/contact-us/map.svg'
import { ReactComponent as IcoPhone } from '../img/contact-us/phone.svg'
import {
  IconsDiv,
  RestyledInput,
  SectionWrapper,
  StyledButton,
  StyledContactsDiv,
  StyledContactsList,
  StyledFormDiv,
  StyledIcoFb,
  StyledIcoInsta,
  StyledImage,
  StyledInputsDiv,
  StyledListItem,
  StyledSection,
  StyledTextArea,
  StyledTitleH2,
} from './ContactUs.style'

interface Props {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState = {
  email: '',
  first_phoneNumber: '',
  second_phoneNumber: '',
}

function ContactUs({ setIsModalOpen }: Props) {
  const userName = validationHook('', {
    isEmpty: false,
    minLength: 2,
  })
  const userEmail = validationHook('', {
    isEmpty: false,
    minLength: 8,
    emailError: false,
  })
  const userQuestion = validationHook('', {
    isEmpty: false,
    minLength: 15,
  })
  const queryClient = useQueryClient()

  const { mutate } = useMutation(postMainContact, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['usersContact'] })
    },
  })
  const [contactsInputState, setContactsInputState] = useState<ContactTypes>(initialState)
  useQuery({
    queryKey: ['contacts'],
    initialData: initialState,
    queryFn: getMainContact,
    onSuccess: (data) => {
      setContactsInputState(data)
    },
  })

  console.log(contactsInputState.email)
  const handleSubmit = (e: any) => {
    const data = {
      name: userName.value,
      email: userEmail.value,
      question: userQuestion.value,
    }
    mutate(data)
    userName.handleClear(e)
    userEmail.handleClear(e)
    userQuestion.handleClear(e)
    setIsModalOpen(true)
  }

  return (
    <StyledSection>
      <Container>
        <StyledTitleH2>Контакти</StyledTitleH2>
        <SectionWrapper>
          <StyledContactsDiv>
            <StyledImage src={dogM} alt="cute dog" />

            <StyledContactsList>
              <StyledListItem>
                <IcoPhone />
                <a href={`tel:${contactsInputState?.first_phoneNumber}`}>
                  {contactsInputState?.first_phoneNumber}
                </a>
              </StyledListItem>
              <StyledListItem>
                <IcoPhone />
                <a href={`tel:${contactsInputState?.second_phoneNumber}`}>
                  {contactsInputState?.second_phoneNumber}
                </a>
              </StyledListItem>
              <StyledListItem>
                <IcoMail />
                <a href={`mailto:${contactsInputState?.email}`}>
                  {contactsInputState?.email}
                </a>
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
            <form onSubmit={handleSubmit}>
              <StyledInputsDiv>
                <RestyledInput
                  className="name"
                  placeholder="Ім’я"
                  value={userName.value}
                  onChange={(newValue) => userName.onChange(newValue.target.value)}
                  onBlur={userName.onBlur}
                />
                {userName.isDirty && userName.minLengthError && (
                  <ErrorValid>Ім`я має містити щонайменше 2 символи</ErrorValid>
                )}
                <RestyledInput
                  className="email"
                  placeholder="Пошта"
                  value={userEmail.value}
                  onChange={(newValue) => userEmail.onChange(newValue.target.value)}
                  onBlur={userEmail.onBlur}
                />
                {userEmail.minLengthError && userEmail.minLengthError && (
                  <ErrorValid>Поле пошта обов`язкове</ErrorValid>
                )}
                <StyledTextArea
                  name="questions"
                  placeholder="Питання"
                  value={userQuestion.value}
                  onChange={(newValue) => userQuestion.onChange(newValue.target.value)}
                  onBlur={userQuestion.onBlur}
                />
                {userQuestion.isDirty && userQuestion.minLengthError && (
                  <ErrorValid>
                    Поле питання не має бути порожнім, щонайменше 15 символів
                  </ErrorValid>
                )}
              </StyledInputsDiv>
              <StyledButton
                type="submit"
                disabled={
                  !userName.inputDisabled ||
                  !userEmail.inputDisabled ||
                  !userQuestion.inputDisabled
                }
              >
                Відправити
              </StyledButton>
            </form>
          </StyledFormDiv>
        </SectionWrapper>
      </Container>
    </StyledSection>
  )
}

export default ContactUs
