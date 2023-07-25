import { Link } from 'react-router-dom'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { ForgotButton } from '../ForgotPage/ForgotPage.style'

const LoginComponent = () => {
  return (
    <>
      <Form>
        <FormH2>Вхід до панелі</FormH2>
        <FormContainer>
          <Input label="Електронна пошта адміністратора:" placeholder="email@gmail.com" />
          <Input label="Пароль адміністратора:" placeholder="********" />
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
