import { useState } from 'react'
import usePatch from '../../../../API/usePatch'
import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'

function Settings() {
  const [passwordOld, setPasswordOld] = useState('')
  const [passwordNew, setPasswordNew] = useState('')

  const handlerPatch = () => {
    const patchReq = {
      oldPassword: passwordOld,
      newPassword: passwordNew,
    }
    usePatch(patchReq)
  }
  return (
    <Form onSubmit={() => handlerPatch()}>
      <FormH2>Налаштування</FormH2>
      <p style={{ fontWeight: '700', marginBottom: '20px' }}>Змінити пароль</p>
      <FormContainer>
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
