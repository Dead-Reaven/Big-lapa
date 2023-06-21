import Container from '../../styles/Container.style'
import ExampleBlock from './Components/ExampleBlock/ExampleBlock'
import StyledHome from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <Container>
        <ExampleBlock />
      </Container>
    </StyledHome>
  )
}

export default Home
