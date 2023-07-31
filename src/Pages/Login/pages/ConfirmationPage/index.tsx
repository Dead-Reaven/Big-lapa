import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, FormButton, FormContainer } from '../../../Admin/Components/UI/Form.style'
import Input from '../../../Admin/Components/UI/Input'
import { MyFormH2 } from './ConfirmationComponent.style'

const ConfirmationComponent = () => {
  const [confirmCode, setConfirmCode] = useState('')
  return (
    <Form>
      <MyFormH2>Введіть код із повідомлення</MyFormH2>
      <FormContainer>
        <Input
          state={confirmCode}
          onChange={(newValue) => setConfirmCode(newValue)}
          label="Код підтвердження"
          placeholder="****"
        />
        <NavLink to="recovery">
          <FormButton type="submit">Надіслати</FormButton>
        </NavLink>
      </FormContainer>
    </Form>
  )
}

export default ConfirmationComponent
