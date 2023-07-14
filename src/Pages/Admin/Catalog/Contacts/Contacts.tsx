import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'

function Contacts() {
  return (
    <Form>
      <FormH2>Телефони та електронна пошта</FormH2>
      <FormContainer>
        <Input label="Перший номер телефону" placeholder="+380" />
        <Input label="Другий номер телефону" placeholder="+380" />
        <Input label="Електронна пошта" placeholder="example@gmail.com" />
        <FormButton>Оновити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Contacts
