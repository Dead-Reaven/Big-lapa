import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../../API/fetchers/postLogin'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import useValidForm from '../../useValidForm'
import { ForgotButton } from '../ForgotPage/ForgotPage.style'

const validationHook = (initialState: any, validations: any) => {
  const [value, setStateUser] = useState(initialState)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidForm({ value, validations })

  const onChange = (newValue: any) => {
    setStateUser(newValue)
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    ...valid,
  }
}

const LoginComponent = () => {
  const loginUser = validationHook('', { isEmpty: false, minLength: 4 })
  const passwordUser = validationHook('', { isEmpty: false, minLength: 5 })
  const [worning, setWorning] = useState('')

  const onHandlerSubmit = () => {
    const data = {
      login: loginUser.value,
      password: passwordUser.value,
      setWorning,
    }
    useLogin(data)
  }
  return (
    <>
      <Form onSubmit={() => onHandlerSubmit()}>
        <FormH2>Вхід до панелі</FormH2>
        <FormContainer>
          {worning && <h1 style={{ color: 'red' }}>Error: {worning}</h1>}
          {loginUser.isDirty && loginUser.isEmpty && (
            <div style={{ color: 'red' }}>Поле пустое</div>
          )}
          <Input
            state={loginUser.value}
            onChange={(newValue) => loginUser.onChange(newValue)}
            onBlur={loginUser.onBlur}
            label="Електронна пошта адміністратора:"
            placeholder="email@gmail.com"
          />
          {passwordUser.isDirty && loginUser.isEmpty && (
            <div style={{ color: 'red' }}>Поле пустое</div>
          )}
          <Input
            state={passwordUser.value}
            onChange={(newValue) => passwordUser.onChange(newValue)}
            onBlur={passwordUser.onBlur}
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
