import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import usePatch from '../../../../API/fetchers/patchPatch'
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'

function Settings() {
  const [passwordOld, setPasswordOld] = useState('')

  const [passwordNew, setPasswordNew] = useState('')

  const [confPasswordNew, setConfPasswordNew] = useState('')

  const [isError, setIsError] = useState('')

  const queryClient = useQueryClient()

  const { mutate } = useMutation(usePatch, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patch'] })
    },
  })

  const handlerPatch = () => {
    const updateData = {
      oldPassword: passwordOld,
      newPassword: passwordNew,
      setIsError: setIsError,
    }
    mutate(updateData)
    setPasswordOld('')
    setPasswordNew('')
  }
  return (
    <Form onSubmit={() => handlerPatch()}>
      <FormH2>Налаштування</FormH2>
      <p style={{ fontWeight: '700', marginBottom: '20px' }}>Змінити пароль</p>
      <FormContainer>
        {isError && <h1 style={{ color: 'red' }}>Error: {isError}</h1>}

        <Input
          state={passwordOld}
          onChange={(newValue) => setPasswordOld(newValue)}
          label="Введіть старий пароль"
          placeholder="*********"
        />
        <Input
          state={passwordNew}
          onChange={(newValue) => setPasswordNew(newValue)}
          label="Введіть новий пароль"
          placeholder="*********"
        />
        <Input
          state={passwordNew}
          onChange={(newValue) => setPasswordNew(newValue)}
          label="Підтвердіть новий пароль"
          placeholder="*********"
        />
        <FormButton>Підтвердити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Settings
