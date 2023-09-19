import { StyledSection, StyledTitleH1, StyledLink, ItemsWrapper } from './Slider.styles'
import Container from '../../../Components/UI/Container.style'
import { ReactComponent as Bullet } from '../../Contacts/img/slider/bullet_first.svg'

function Slider() {
  return (
    <StyledSection>
      <Container>
        <StyledTitleH1>
          Підтримай друга,
          <br /> врятуй тварину!
        </StyledTitleH1>
        <ItemsWrapper>
          <Bullet />
          <StyledLink to="." end>
            Детальніше
          </StyledLink>
        </ItemsWrapper>
      </Container>
    </StyledSection>
  )
}

export default Slider
