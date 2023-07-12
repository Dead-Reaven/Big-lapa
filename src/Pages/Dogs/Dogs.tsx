import Slider from './Components/Slider/Slider'
import { DogsStyled } from './Dogs.style'

function Dogs() {
  return (
    <DogsStyled data-testid="dogs-page">
      <Slider />
    </DogsStyled>
  )
}

export default Dogs
