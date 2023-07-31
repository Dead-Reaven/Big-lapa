import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'

const RecoveryPage = () => {
  const [recoveryPass, setRecoveryPass] = useState('')
  return (
    <Form>
      <FormH2>Відновлення паролю</FormH2>
      <FormContainer>
        <Input
          state={recoveryPass}
          onChange={(newValue) => setRecoveryPass(newValue)}
          label="Введіть новий пароль"
          placeholder="********"
        />
        <Input
          state={recoveryPass}
          onChange={(newValue) => setRecoveryPass(newValue)}
          label="Підтвердіть пароль"
          placeholder="********"
        />
        <NavLink to="/login">
          <FormButton type="submit">Підтвердити</FormButton>
        </NavLink>
      </FormContainer>
    </Form>
  )
}

export default RecoveryPage
