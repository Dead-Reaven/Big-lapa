import { useState } from 'react'
// react query
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
// UI
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
// api types
import { ContactTypes } from '../../../../API/types'
// fetchers
import fetchContacts from '../../../../API/fetchers/fetchContacts'
import postContacts from '../../../../API/fetchers/postContacts'

import Input from '../../Components/UI/Input'

const initialState = {
  email: '',
  first_phoneNumber: '',
  second_phoneNumber: '',
}
function Contacts() {
  const [contactsInputState, setContactsInputState] = useState<ContactTypes>(initialState)
  const { isSuccess } = useQuery({
    queryKey: ['contacts'],
    initialData: initialState,
    queryFn: fetchContacts,
    onSuccess: (data) => {
      setContactsInputState(data)
    },
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation(() => postContacts(contactsInputState), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['contacts'] })
    },
  })

  return (
    <Form onSubmit={() => mutate()}>
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
    </Form>
  )
}

export default Contacts
