import { DogTypes } from '../../API/types'
import useGet from '../../API/useGet'
import DogSearch from '../../Components/DogSearch/DogSearch'
import Gallery from '../../Components/Gallery/Gallery'
import Slider from './Components/Slider/Slider'
import { DogsStyled } from './Dogs.style'

function Dogs() {
  const fetchedData = useGet('dogs', 'get') as DogTypes | null

  return (
    <DogsStyled data-testid="dogs-page">
      <Slider />
      <DogSearch data={fetchedData} />
      <Gallery />
    </DogsStyled>
  )
}

export default Dogs
