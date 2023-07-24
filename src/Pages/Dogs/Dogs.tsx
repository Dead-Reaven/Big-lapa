import { DogTypes } from '../../API/types'
import useGet from '../../API/useGet'
import DogSearch from '../../Components/DogSearch/DogSearch'
import Gallery from '../../Components/Gallery/Gallery'
import Slider from './Components/Slider/Slider'
import { DogsStyled } from './Dogs.style'

function Dogs() {
  const data: DogTypes | null = useGet('dogs', 'get')
  return (
    <DogsStyled data-testid="dogs-page">
      <Slider />
      <DogSearch data={data} />
      <Gallery />
    </DogsStyled>
  )
}

export default Dogs
