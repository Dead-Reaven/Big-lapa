import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import postChangePass from '../../../../API/fetchers/postChangePass'
import { useSuccessMessage } from '../../../../successContextMess'
import {
  ErrorValid,
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { validationHook } from '../../validSetting'

const RecoveryPage = () => {
  const { showSuccessMessage } = useSuccessMessage()
  const recoveryPass = validationHook('', {
    isEmpty: false,
    minLength: 8,
    maxLength: 12,
  })
  const confRecoveryPass = validationHook('', {
    isEmpty: false,
    minLength: 8,
    maxLength: 12,
  })
  const [token, setToken] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const fromPage = location.state?.from?.pathname || '/login'

  const queryClient = useQueryClient()
  const { mutate, isSuccess, isError } = useMutation(postChangePass, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['token'] })
      navigate(fromPage, { replace: true })
    },
  })
  const onHandlerForm = () => {
    const data = {
      token: token,
      newPassword: recoveryPass.value,
    }
    if (recoveryPass.value === confRecoveryPass.value) {
      mutate(data)
    }
    showSuccessMessage('Успішно виконано!✔️')
  }
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const extractedToken = searchParams.get('token')
    setToken(extractedToken || '')
  })

  return (
    <Form onSubmit={onHandlerForm}>
      <FormH2>Відновлення паролю</FormH2>
      <FormContainer>
        {isError ? (
          <Input
            state={recoveryPass.value}
            onChange={(newValue) => recoveryPass.onChange(newValue)}
            label="Введіть новий пароль"
            placeholder="********"
            onBlur={recoveryPass.onBlur}
            iserror={isError}
            changecolor={recoveryPass.minLengthError || recoveryPass.maxLengthError}
          />
        ) : (
          <Input
            state={recoveryPass.value}
            onChange={(newValue) => recoveryPass.onChange(newValue)}
            label="Введіть новий пароль"
            placeholder="********"
          />
        )}
        {recoveryPass.isDirty && recoveryPass.minLengthError && (
          <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
        )}
        {recoveryPass.isDirty && recoveryPass.maxLengthError && (
          <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
        )}

        {isError ? (
          <Input
            state={confRecoveryPass.value}
            onChange={(newValue) => confRecoveryPass.onChange(newValue)}
            label="Введіть новий пароль"
            placeholder="********"
            onBlur={confRecoveryPass.onBlur}
            iserror={isError}
            changecolor={
              confRecoveryPass.minLengthError || confRecoveryPass.maxLengthError
            }
          />
        ) : (
          <Input
            state={confRecoveryPass.value}
            onChange={(newValue) => confRecoveryPass.onChange(newValue)}
            label="Підтвердіть пароль"
            placeholder="********"
          />
        )}
        {confRecoveryPass.isDirty && confRecoveryPass.minLengthError && (
          <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
        )}
        {confRecoveryPass.isDirty && confRecoveryPass.maxLengthError && (
          <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
        )}

        <FormButton type="submit" disabled={!recoveryPass.inputDisabled}>
          Підтвердити
        </FormButton>
      </FormContainer>
    </Form>
  )
}

export default RecoveryPage
