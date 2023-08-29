import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useLogin from '../../../../API/fetchers/postLogin'
import { useAuth } from '../../../../AuthHoc/useAuth'
import {
  ErrorValid,
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import Message from '../../../Admin/Components/UI/Message'
import { validationHook } from '../../validSetting'
import { ForgotButton } from '../ForgotPage/ForgotPage.style'

const LoginComponent = () => {
  const token = localStorage.getItem('access_token')
  const location = useLocation()
  const navigate = useNavigate()
  const { signin }: any = useAuth()
  const fromPage = location.state?.from?.pathname || '/admin'

  const queryClient = useQueryClient()
  const { mutate, isSuccess, isError } = useMutation(useLogin, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })

  const emailUser = validationHook('', {
    isEmpty: false,
    minLength: 8,
    emailError: false,
  })
  const passwordUser = validationHook('', { isEmpty: false, minLength: 8, maxLength: 12 })

  const onHandlerSubmit = (e: any) => {
    const data = {
      login: emailUser.value,
      password: passwordUser.value,
    }
    mutate(data)
    emailUser.handleClear(e)
    passwordUser.handleClear(e)
  }
  useEffect(() => {
    if (token) {
      signin(token, () => navigate(fromPage, { replace: true }))
    }
  }, [token])

  return (
    <>
      <Form onSubmit={onHandlerSubmit}>
        <FormH2>Вхід до панелі</FormH2>
        <FormContainer>
          {isError ? (
            <Input
              state={emailUser.value}
              onChange={(newValue) => emailUser.onChange(newValue)}
              onBlur={emailUser.onBlur}
              label="Електронна пошта адміністратора:"
              placeholder="email@gmail.com"
              iserror={isError}
              changecolor={emailUser.emailError}
            />
          ) : (
            <Input
              state={emailUser.value}
              onChange={(newValue) => emailUser.onChange(newValue)}
              label="Електронна пошта адміністратора:"
              placeholder="email@gmail.com"
            />
          )}
          {isError && emailUser.emailError && (
            <ErrorValid>Введіть дійсний email</ErrorValid>
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
          <Link to="reset-password">
            <ForgotButton>Забули пароль?</ForgotButton>
          </Link>
          <FormButton
            type="submit"
            disabled={!emailUser.inputDisabled || !passwordUser.inputDisabled}
          >
            Увійти
          </FormButton>
        </FormContainer>
        {isSuccess && <Message mode="green">Успіх! ✔️</Message>}
      </Form>
    </>
  )
}

export default LoginComponent
