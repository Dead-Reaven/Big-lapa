import { NavLink } from 'react-router-dom'
import { Form, FormButton, FormContainer } from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { MyFormH2 } from './ConfirmationComponent.style'

const ConfirmationComponent = () => {
  return (
    <Form>
      <MyFormH2>Введіть код із повідомлення</MyFormH2>
      <FormContainer>
        <Input label="Код підтвердження" placeholder="****" />
        <NavLink to="recovery">
          <FormButton type="submit">Надіслати</FormButton>
        </NavLink>
      </FormContainer>
    </Form>
  )
}

export default ConfirmationComponent
