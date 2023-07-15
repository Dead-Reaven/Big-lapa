import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'

function Settings() {
  return (
    <Form>
      <FormH2>Налаштування</FormH2>
      <p style={{ fontWeight: '700', marginBottom: '20px' }}>Змінити пароль</p>
      <FormContainer>
        <Input label="Введіть старий пароль" placeholder="*********" />
        <Input label="Введіть новий пароль" placeholder="*********" />
        <Input label="Підтвердіть новий пароль" placeholder="*********" />
        <FormButton>Підтвердити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Settings
