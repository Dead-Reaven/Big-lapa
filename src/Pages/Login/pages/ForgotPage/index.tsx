import { useMutation, useQueryClient } from '@tanstack/react-query'
import postForgotPass from '../../../../API/fetchers/postForgotPass'
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
import { FormP } from './ForgotPage.style'

const ForgotComponent = () => {
  const queryClient = useQueryClient()
  const { mutate, isSuccess, isError } = useMutation(postForgotPass, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth'] })
    },
  })

  const emailUser = validationHook('', {
    isEmpty: false,
    minLength: 8,
    emailError: false,
  })

  const onHandlerSubmit = (e: any) => {
    const data = {
      email: emailUser.value,
    }
    mutate(data)
    emailUser.handleClear(e)
  }

  return (
    <Form onSubmit={onHandlerSubmit}>
      <FormH2>Забули пароль?</FormH2>
      <FormContainer>
        <FormP>
          Введіть адресу електронної пошти, і ми надішлемо вам код для зміни пароля
        </FormP>
        {isError && emailUser.emailError && (
          <ErrorValid>Введіть дійсний email</ErrorValid>
        )}
        {isError ? (
          <Input
            state={emailUser.value}
            onChange={(newValue) => emailUser.onChange(newValue)}
            label="Електронна пошта адміністратора:"
            placeholder="email@gmail.com"
            iserror={isError}
            changecolor={emailUser.emailError}
            onBlur={emailUser.onBlur}
          />
        ) : (
          <Input
            state={emailUser.value}
            onChange={(newValue) => emailUser.onChange(newValue)}
            label="Електронна пошта адміністратора:"
            placeholder="email@gmail.com"
          />
        )}

        <FormButton type="submit" disabled={!emailUser.inputDisabled}>
          Надіслати
        </FormButton>
      </FormContainer>
      {isSuccess && (
        <Message mode="green">Успіх! Вам надіслали листа на пошту ✔️</Message>
      )}
    </Form>
  )
}

export default ForgotComponent
