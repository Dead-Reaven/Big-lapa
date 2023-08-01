import { useState } from 'react'
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'
import useGet from '../../../../API/useGet'
import usePost from '../../../../API/usePost'
import { ContactTypes } from '../../../../API/types'

function Contacts() {
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
    <Form
      onSubmit={() => {
        usePost('contacts', contactsState)
      }}
    >
      <FormH2>Телефони та електронна пошта</FormH2>
      <FormContainer>
        <Input
          state={contactsState.first_phoneNumber}
          onChange={(newValue) =>
            setContactsState({ ...contactsState, first_phoneNumber: newValue })
          }
          label="Перший номер телефону"
          placeholder={contactsState?.first_phoneNumber}
        />
        <Input
          state={contactsState.second_phoneNumber}
          label="Другий номер телефону"
          placeholder={contactsState?.second_phoneNumber}
          onChange={(newValue) =>
            setContactsState({ ...contactsState, second_phoneNumber: newValue })
          }
        />
        <Input
          state={contactsState.email}
          label="Електронна пошта"
          placeholder={contactsState?.email}
          onChange={(newValue) => setContactsState({ ...contactsState, email: newValue })}
        />
        <FormButton type="submit">Оновити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Contacts
