import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import postChangePass from '../../../../API/fetchers/postChangePass'
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

const RecoveryPage = () => {
  const { signin }: any = useAuth()
  const queryClient = useQueryClient()

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

  const [searchParams] = useSearchParams()
  const tokenQuery = searchParams.get('token')

  const { mutate, isSuccess, isError } = useMutation(postChangePass, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['token'] })
    },
  })
  const onHandlerForm = () => {
    const data = {
      token: tokenQuery,
      newPassword: recoveryPass.value,
    }
    if (recoveryPass.value === confRecoveryPass.value) {
      mutate(data)
    } else return
  }

  const location = useLocation()
  const navigate = useNavigate()
  const fromPage = location.state?.from?.pathname || '/login'

  if (isSuccess) {
    signin(searchParams, () => navigate(fromPage, { replace: true }))
  }

  console.log(tokenQuery)
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
      {isSuccess && <Message mode="green">Успіх! ✔️</Message>}
    </Form>
  )
}

export default RecoveryPage
