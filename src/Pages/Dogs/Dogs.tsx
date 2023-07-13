import Gallery from './Components/Gallery/Gallery'
import Slider from './Components/Slider/Slider'
import { DogsStyled } from './Dogs.style'

function Dogs() {
  return (
    <DogsStyled data-testid="dogs-page">
      <Slider />
      <Gallery />
    </DogsStyled>
  )
}

export default Dogs
