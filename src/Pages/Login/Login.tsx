import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../Admin/Components/UI/Form.style'
import Input from '../Admin/Components/UI/Input'
const Login = () => {
  return (
    <Form>
      <FormH2>Login</FormH2>
      <FormContainer>
        <Input label="Email" placeholder="Email@gmail.com" />
        <Input label="Password" placeholder="password8x" />
        <FormButton type="submit">Оновити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Login
