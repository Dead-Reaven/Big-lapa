import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { FormP } from './ForgotPage.style'

const ForgotComponent = () => {
  const [forgotState, setForgotState] = useState('')
  return (
    <Form>
      <FormH2>Забули пароль?</FormH2>
      <FormContainer>
        <FormP>
          Введіть адресу електронної пошти, і ми надішлемо вам код для зміни пароля
        </FormP>
        <Input
          state={forgotState}
          onChange={(newValue) => setForgotState(newValue)}
          label="Електронна пошта адміністратора:"
          placeholder="email@gmail.com"
        />
        <NavLink to="confirmation">
          <FormButton type="submit">Надіслати</FormButton>
        </NavLink>
      </FormContainer>
    </Form>
  )
}

export default ForgotComponent
