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
            onChange={(e) => setLoginUser(e.target.value)}
            label="Електронна пошта адміністратора:"
            placeholder="email@gmail.com"
          />
          <Input
            state={passwordUser}
            onChange={(e) => setPasswordUser(e.target.value)}
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
