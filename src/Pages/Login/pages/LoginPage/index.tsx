import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../../API/useLogin'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { ForgotButton } from '../ForgotPage/ForgotPage.style'

const LoginComponent = () => {
  const [loginUser, setLoginUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const onHandlerSubmit = () => {
    const data = {
      login: loginUser,
      password: passwordUser,
    }
    useLogin(data)
    setLoginUser('')
    setPasswordUser('')
  }
  return (
    <>
      <Form onSubmit={() => onHandlerSubmit()}>
        <FormH2>Вхід до панелі</FormH2>
        <FormContainer>
          <Input
            state={loginUser}
            onChange={(newValue) => setLoginUser(newValue)}
            label="Електронна пошта адміністратора:"
            placeholder="email@gmail.com"
          />
          <Input
            state={passwordUser}
            onChange={(newValue) => setPasswordUser(newValue)}
            label="Пароль адміністратора:"
            placeholder="********"
          />
          <Link to="authorization">
            <ForgotButton>Забули пароль?</ForgotButton>
          </Link>
          <FormButton type="submit">Увійти</FormButton>
        </FormContainer>
      </Form>
    </>
  )
}

export default LoginComponent
