import TitleH2 from '../../Components/UI/TitleH2.styles'
import TitleH3 from '../../Components/UI/TitleH3.styles'
import { DogStyled, DogContainer, DogFlex, Slider, DogContent } from './Dog.style'

function Dog() {
  const data = {
    name: 'Джулі',
    age: '10 місяців',
    sex: 'Дівчинка',
    size: 'Великий',
    breed: 'Без породи',
    chip: 'Так',
    description: `Джулі - чарівна та енергійна собачка, яка відмінно ладнає з іншими собаками і людьми. Вона обожнює прогулянки і гратися з м'ячиком.Джулі має певні медичні проблеми, і для підтримки її здоров'я їй потрібні регулярні ліки та спеціальний догляд. Незважаючи на свої проблеми, Джулі є надзвичайно лагідною та люблячою собакою. Ваші пожертви допоможуть нам забезпечити Джулі необхідними ліками, медичним та спеціальним доглядом. Ваша підтримка дозволить нам зробити все можливе для поліпшення її стану і забезпечити їй комфортні умови проживання.`,
  }

  const { name, age, sex, breed, chip, description } = data
  return (
    <DogStyled data-testid="dogs-page">
      <DogContainer>
        <DogFlex>
          <Slider>Slider</Slider>
          <DogContent>
            <TitleH2>{name}</TitleH2>
            <TitleH3>{age}</TitleH3>

            <TitleH3>Про тваринку:</TitleH3>
            <p>{description}</p>
          </DogContent>
        </DogFlex>
      </DogContainer>
    </DogStyled>
  )
}

export default Dog
