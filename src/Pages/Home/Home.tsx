import ExampleBlock from './Components/ExampleBlock/ExampleBlock'
import StyledHome from './Home.styles'

function Home() {
  return (
    <StyledHome data-testid="home-page">
      <ExampleBlock />
    </StyledHome>
  )
}

export default Home
