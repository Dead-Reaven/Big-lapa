import { Form, FormButton, FormContainer, FormH2 } from '../../Components/UI/Form.style'
import Input from '../../Components/UI/Input'
import useGet from '../../../../API/useGet'
import usePost from '../../../../API/usePost'

function Contacts() {
  const contacts = useGet('contacts', 'get')

  const onSubmitHadler = () => {
    const data = {
      first_phoneNumber: '+380 068 123 111',
      second_phoneNumber: '+380 068 777 777',
      email: 'email@one.com',
    }
    useGet(data)
  }

  return (
    <Form onSubmit={() => onSubmitHadler()}>
      <FormH2>Телефони та електронна пошта</FormH2>
      <FormContainer>
        <Input label="Перший номер телефону" placeholder={contacts?.first_phoneNumber} />
        <Input label="Другий номер телефону" placeholder={contacts?.second_phoneNumber} />
        <Input label="Електронна пошта" placeholder={contacts?.email} />
        <FormButton type="submit">Оновити</FormButton>
      </FormContainer>
    </Form>
  )
}

export default Contacts
