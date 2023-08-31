import { useMutation, useQueryClient } from '@tanstack/react-query'
import usePatch from '../../../../API/fetchers/patchPatch'
import { validationHook } from '../../../Login/validSetting'
import {
  ErrorValid,
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'
import Message from '../../Components/UI/Message'

function Settings() {
  const queryClient = useQueryClient()

  const { mutate, isSuccess, isError } = useMutation(usePatch, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patch'] })
    },
  })

  const passwordOld = validationHook('', {
    isEmpty: false,
    minLength: 8,
    maxLength: 12,
  })

  const passwordNew = validationHook('', {
    isEmpty: false,
    minLength: 8,
    maxLength: 12,
  })

  const passwordNewConf = validationHook('', {
    isEmpty: false,
    minLength: 8,
    maxLength: 12,
  })

  const handlerPatch = (e: any) => {
    const updateData = {
      currentPassword: passwordOld.value,
      newPassword: passwordNew.value,
    }
    if (passwordNew.value === passwordNewConf.value) {
      mutate(updateData)
    } else return
    passwordOld.handleClear(e)
    passwordNew.handleClear(e)
    passwordNewConf.handleClear(e)
  }
  return (
    <Form onSubmit={handlerPatch}>
      <FormH2>Налаштування</FormH2>
      <p style={{ fontWeight: '700', marginBottom: '20px' }}>Змінити пароль</p>
      <FormContainer>
        {isError && <ErrorValid>Відбулася помилка, схоже пароль не вірний</ErrorValid>}
        {isError ? (
          <Input
            state={passwordOld.value}
            onBlur={passwordOld.onBlur}
            onChange={(newValue) => passwordOld.onChange(newValue)}
            label="Введіть старий пароль"
            placeholder="*********"
            iserror={isError}
            changecolor={passwordOld.minLengthError || passwordOld.maxLengthError}
          />
        ) : (
          <Input
            state={passwordOld.value}
            onChange={(newValue) => passwordOld.onChange(newValue)}
            label="Введіть старий пароль"
            placeholder="*********"
          />
        )}
        {passwordOld.isDirty && passwordOld.minLengthError && (
          <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
        )}
        {passwordOld.isDirty && passwordOld.maxLengthError && (
          <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
        )}

        {isError ? (
          <Input
            state={passwordNew.value}
            onBlur={passwordNew.onBlur}
            onChange={(newValue) => passwordNew.onChange(newValue)}
            label="Введіть новий пароль"
            placeholder="*********"
            iserror={isError}
            changecolor={passwordNew.minLengthError || passwordNew.maxLengthError}
          />
        ) : (
          <Input
            state={passwordNew.value}
            onChange={(newValue) => passwordNew.onChange(newValue)}
            label="Введіть новий пароль"
            placeholder="*********"
          />
        )}
        {passwordNew.isDirty && passwordNew.minLengthError && (
          <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
        )}
        {passwordNew.isDirty && passwordNew.maxLengthError && (
          <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
        )}

        {isError ? (
          <Input
            state={passwordNewConf.value}
            onBlur={passwordNewConf.onBlur}
            onChange={(newValue) => passwordNewConf.onChange(newValue)}
            label="Підтвердіть новий пароль"
            placeholder="*********"
            iserror={isError}
            changecolor={passwordNewConf.minLengthError || passwordNewConf.maxLengthError}
          />
        ) : (
          <Input
            state={passwordNewConf.value}
            onChange={(newValue) => passwordNewConf.onChange(newValue)}
            label="Підтвердіть новий пароль"
            placeholder="*********"
          />
        )}
        {passwordNewConf.isDirty && passwordNewConf.minLengthError && (
          <ErrorValid>Пароль має містити мінімум 8 символів</ErrorValid>
        )}
        {passwordNewConf.isDirty && passwordNewConf.maxLengthError && (
          <ErrorValid>Пароль має містити максимум 12 символів</ErrorValid>
        )}
        <FormButton
          type="submit"
          disabled={!passwordNew.inputDisabled || !passwordOld.inputDisabled}
        >
          Підтвердити
        </FormButton>
      </FormContainer>
      {isSuccess && <Message mode="green">Успіх! ✔️</Message>}
    </Form>
  )
}

export default Settings
