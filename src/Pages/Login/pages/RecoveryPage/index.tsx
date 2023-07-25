import { NavLink } from 'react-router-dom'
import {
  Form,
  FormButton,
  FormContainer,
  FormH2,
} from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'

const RecoveryPage = () => {
  return (
    <Form>
      <FormH2>Відновлення паролю</FormH2>
      <FormContainer>
        <Input label="Введіть новий пароль" placeholder="********" />
        <Input label="Підтвердіть пароль" placeholder="********" />
        <NavLink to="/login">
          <FormButton type="submit">Підтвердити</FormButton>
        </NavLink>
      </FormContainer>
    </Form>
  )
}

export default RecoveryPage
