import Container from '../../Components/UI/Container.style'
import TitleH2 from '../../Components/UI/TitleH2.styles'
import TitleH3 from '../../Components/UI/TitleH3.styles'
import Label from './Label'
import { ReactComponent as FemaleIco } from './img/female.svg'
import { ReactComponent as MaleIco } from './img/male.svg'
import { ReactComponent as BreedIco } from './img/breed.svg'
import { ReactComponent as ChipIco } from './img/chip.svg'
import { ReactComponent as SizeIco } from './img/size.svg'
import {
  DogStyled,
  DogContainer,
  DogFlex,
  Slider,
  DogContent,
  DogTitle,
  Lables,
  DogText,
  HiddenDogText,
} from './Dog.style'

function Dog() {
  const data = {
    name: 'Джулі',
    age: '10 місяців',
    sex: 'Дівчинка',
    size: 'Великий',
    breed: 'Без породи',
    chip: 'Так',
    description: `Джулі - чарівна та енергійна собачка, яка відмінно ладнає з іншими собаками і людьми. Вона обожнює прогулянки і гратися з м'ячиком.\n
    Джулі має певні медичні проблеми, і для підтримки її здоров'я їй потрібні регулярні ліки та спеціальний догляд. Незважаючи на свої проблеми, Джулі є надзвичайно лагідною та люблячою собакою.\n
    Ваші пожертви допоможуть нам забезпечити Джулі необхідними ліками, медичним та спеціальним доглядом.
    Ваша підтримка дозволить нам зробити все можливе для поліпшення її стану і забезпечити їй комфортні умови проживання.`,
  }

  const { name, age, sex, breed, size, chip, description } = data
  return (
    <DogStyled data-testid="dogs-page">
      <Container>
        <DogContainer>
          <DogFlex>
            <HiddenDogText>
              <TitleH3 marginBottom="24px">Про тваринку:</TitleH3>
              <p>{description}</p>
            </HiddenDogText>
            <Slider>Slider</Slider>
            <DogContent>
              <DogTitle>
                <TitleH2>{name}</TitleH2>
                <TitleH3>{age}</TitleH3>
              </DogTitle>
              <Lables>
                <Label text="Стать" value={sex}>
                  {sex === 'Дівчинка' ? <FemaleIco /> : <MaleIco />}
                </Label>
                <Label text="Порода" value={breed}>
                  <BreedIco />
                </Label>
                <Label text="Розмір" value={size}>
                  <SizeIco />
                </Label>
                <Label text="Наявність чіпа" value={chip}>
                  <ChipIco />
                </Label>
              </Lables>
              <DogText>
                <TitleH3 marginBottom="24px">Про тваринку:</TitleH3>
                <p>{description}</p>
              </DogText>
            </DogContent>
          </DogFlex>
        </DogContainer>
      </Container>
    </DogStyled>
  )
}

export default Dog
