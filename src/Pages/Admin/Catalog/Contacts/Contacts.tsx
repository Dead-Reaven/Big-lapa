import { useEffect, useState } from 'react'
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'
import useGet from '../../../../API/useGet'
import usePost from '../../../../API/usePost'
import { ContactTypes } from '../../../../API/types'

function Contacts() {
  const contacts = useGet('contacts') as ContactTypes
  const [fieldsState, setFieldsState] = useState<ContactTypes>({
    email: '',
    first_phoneNumber: '',
    second_phoneNumber: '',
  })

  useEffect(() => {
    if (contacts)
      setFieldsState({
        email: contacts.email,
        first_phoneNumber: contacts.first_phoneNumber,
        second_phoneNumber: contacts.second_phoneNumber,
      })
  }, [contacts])

  return (
    <Form
      onSubmit={() => {
        usePost('contacts', fieldsState)
      }}
    >
      <FormH2>Телефони та електронна пошта</FormH2>
      <FormContainer>
        <Input
          state={fieldsState.first_phoneNumber}
          onChange={(newValue) =>
            setFieldsState({ ...fieldsState, first_phoneNumber: newValue })
          }
          label="Перший номер телефону"
          placeholder={fieldsState?.first_phoneNumber}
        />
        <Input
          state={fieldsState.second_phoneNumber}
          label="Другий номер телефону"
          placeholder={fieldsState?.second_phoneNumber}
          onChange={(newValue) =>
            setFieldsState({ ...fieldsState, second_phoneNumber: newValue })
          }
        />
        <Input
          state={fieldsState.email}
          label="Електронна пошта"
          placeholder={fieldsState?.email}
          onChange={(newValue) => setFieldsState({ ...fieldsState, email: newValue })}
        />
        <FormButton type="submit">Оновити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Contacts
