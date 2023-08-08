import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../../../API/fetchers/postLogin'
import {
  ErrorValid,
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import useValidForm from '../../useValidForm'
import { ForgotButton } from '../ForgotPage/ForgotPage.style'

const validationHook = (initialState: string, validations: any) => {
  const [value, setStateUser] = useState(initialState)
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidForm({ value, validations })

  const onChange = (newValue: string) => {
    setStateUser(newValue)
  }

  const handleClear = (e: any) => {
    e.preventDefault()
    setStateUser('')
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    onChange,
    handleClear,
    onBlur,
    ...valid,
  }
}

const LoginComponent = () => {
  const queryClient = useQueryClient()
  const { mutate, isError } = useMutation(useLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })

  const loginUser = validationHook('', {
    isEmpty: false,
    minLength: 8,
    emailError: false,
  })
  const passwordUser = validationHook('', { isEmpty: false, minLength: 8, maxLength: 12 })

  const onHandlerSubmit = (e: any) => {
    const data = {
      login: loginUser.value,
      password: passwordUser.value,
    }
    mutate(data)
    loginUser.handleClear(e)
    passwordUser.handleClear(e)
  }

  return (
    <>
      <Form onSubmit={onHandlerSubmit}>
        <FormH2>Вхід до панелі</FormH2>
        <FormContainer>
          {isError && loginUser.emailError && (
            <ErrorValid>Введіть дійсний email</ErrorValid>
          )}
          {isError ? (
            <Input
              state={loginUser.value}
              onChange={(newValue) => loginUser.onChange(newValue)}
              onBlur={loginUser.onBlur}
              label="Електронна пошта адміністратора:"
              placeholder="email@gmail.com"
              iserror={isError}
              changecolor={loginUser.emailError}
            />
          ) : (
            <Input
              state={loginUser.value}
              onChange={(newValue) => loginUser.onChange(newValue)}
              onBlur={loginUser.onBlur}
              label="Електронна пошта адміністратора:"
              placeholder="email@gmail.com"
            />
          )}
          {isError ? (
            <Input
              state={passwordUser.value}
              onChange={(newValue) => passwordUser.onChange(newValue)}
              onBlur={passwordUser.onBlur}
              label="Пароль адміністратора:"
              placeholder="********"
              iserror={isError}
              changecolor={passwordUser.minLengthError || passwordUser.maxLengthError}
            />
          ) : (
            <Input
              state={passwordUser.value}
              onChange={(newValue) => passwordUser.onChange(newValue)}
              onBlur={passwordUser.onBlur}
              label="Пароль адміністратора:"
              placeholder="********"
            />
          )}
          {isError && <ErrorValid>Пошта або пароль не існують</ErrorValid>}
          {passwordUser.isDirty && passwordUser.minLengthError && (
            <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
          )}
          {passwordUser.isDirty && passwordUser.maxLengthError && (
            <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
          )}
          <Link to="authorization">
            <ForgotButton>Забули пароль?</ForgotButton>
          </Link>
          <FormButton
            type="submit"
            disabled={!loginUser.inputDisabled || !passwordUser.inputDisabled}
          >
            Увійти
          </FormButton>
        </FormContainer>
      </Form>
    </>
  )
}

export default LoginComponent
