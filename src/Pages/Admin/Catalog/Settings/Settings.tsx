import { useState } from 'react'
import usePatch from '../../../../API/usePatch'
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'

function Settings() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const handlerPatch = () => {
    const patchReq = {
      passwordOld: oldPassword,
      passwordNew: newPassword,
    }
    usePatch(patchReq)
  }
  return (
    <Form onSubmit={() => handlerPatch()}>
      <FormH2>Налаштування</FormH2>
      <p style={{ fontWeight: '700', marginBottom: '20px' }}>Змінити пароль</p>
      <FormContainer>
        <Input
          state={oldPassword}
          onChange={(newValue) => setOldPassword(newValue)}
          label="Введіть старий пароль"
          placeholder="*********"
        />
        <Input
          state={newPassword}
          onChange={(newValue) => setNewPassword(newValue)}
          label="Введіть новий пароль"
          placeholder="*********"
        />
        <Input
          state={newPassword}
          onChange={(newValue) => setNewPassword(newValue)}
          label="Підтвердіть новий пароль"
          placeholder="*********"
        />
        <FormButton>Підтвердити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Settings
