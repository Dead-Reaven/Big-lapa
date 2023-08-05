import { useState } from 'react'
// react query
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
// UI
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
// api types
import { ContactTypes } from '../../../../API/types/types'
// fetchers
import fetchContacts from '../../../../API/fetchers/fetchContacts'
import postContacts from '../../../../API/fetchers/postContacts'

import Input from '../../Components/UI/Input'
import Message from '../../Components/UI/Message'

const initialState = {
  email: '',
  first_phoneNumber: '',
  second_phoneNumber: '',
}
function Contacts() {
  const [contactsInputState, setContactsInputState] = useState<ContactTypes>(initialState)
  useQuery({
    queryKey: ['contacts'],
    initialData: initialState,
    queryFn: fetchContacts,
    onSuccess: (data) => {
      setContactsInputState(data)
    },
  })

  const queryClient = useQueryClient()

  const { mutate, isSuccess } = useMutation(() => postContacts(contactsInputState), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate()
  }

  return (
    <Form onSubmit={onSubmitForm}>
      <FormH2>Телефони та електронна пошта</FormH2>
      <FormContainer>
        <Input
          state={contactsInputState.first_phoneNumber}
          onChange={(newValue) =>
            setContactsInputState({ ...contactsInputState, first_phoneNumber: newValue })
          }
          label="Перший номер телефону"
          placeholder={'+380'}
        />
        <Input
          state={contactsInputState.second_phoneNumber}
          label="Другий номер телефону"
          placeholder={'+380'}
          onChange={(newValue) =>
            setContactsInputState({ ...contactsInputState, second_phoneNumber: newValue })
          }
        />
        <Input
          state={contactsInputState.email}
          label="Електронна пошта"
          placeholder={'example@mail.com'}
          onChange={(newValue) =>
            setContactsInputState({ ...contactsInputState, email: newValue })
          }
        />
        <FormButton type="submit">Оновити</FormButton>
      </FormContainer>
      {isSuccess && <Message mode="green">Успіх! ✔️</Message>}
    </Form>
  )
}

export default Contacts
