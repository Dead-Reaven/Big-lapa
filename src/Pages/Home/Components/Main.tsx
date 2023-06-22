import MainStyled from './Main.style'
import Container from '../../../styles/Container.style'
import { theme } from '../../../styles/Theme.styles'
import mainPhoto from '../../../assets/img/main_photo.png'

function Main() {
  return (
    <Container color={theme.colors.green}>
      <MainStyled>
        <div>
          <h1>Подаруй другу шанс, врятуй тварину!</h1>
          <span>
            Допоможи домашнім тваринам повернутся додому. <br />
            Ми розділяємо щастя, об&apos;єднуючи тварин та їх господарів.
          </span>
        </div>

        <img src={mainPhoto} alt="Home main dog" />
      </MainStyled>
    </Container>
  )
}

export default Main
