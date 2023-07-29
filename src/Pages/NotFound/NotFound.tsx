import Button from '../../Components/UI/Button.styles'
import Flex from '../../Components/UI/Flex.styles'
import TitleH3 from '../../Components/UI/TitleH3.styles'
import { StyledNotFound, ErrorCode } from './NotFound.style'
import { ReactComponent as Arrow } from './img/Arrow.svg'

function NotFound() {
  return (
    <StyledNotFound data-testid="not-found-page">
      <Flex $align="center" $direction="column">
        <ErrorCode>404</ErrorCode>
        <TitleH3>Page not found</TitleH3>
        <p>
          Вибачте, але ми не змогли знайти сторінку, яку ви шукаєте. Схоже, що сталася
          помилка або сторінка була видалена. Будь ласка, перевірте правильність
          URL-адреси або спробуйте інше посилання.
        </p>
        <Button>
          <Arrow />
          Назад
        </Button>
      </Flex>
    </StyledNotFound>
  )
}

export default NotFound
