import { useState } from 'react'
import { DogTypes } from '../../API/types'
import useGet from '../../API/useGet'
import DogSearch from '../../Components/DogSearch/DogSearch'
import Gallery from '../../Components/Gallery/Gallery'
import Slider from './Components/Slider/Slider'
import { DogsStyled } from './Dogs.style'
import Container from '../../Components/UI/Container.style'

function Dogs() {
  const fetchedData = useGet('dogs') as DogTypes | null
  const [state, setState] = useState<DogTypes | null>(fetchedData)
  return (
    <DogsStyled data-testid="dogs-page">
      <Slider />
      <Container>
        <DogSearch setState={setState} options={fetchedData} />
      </Container>
      <Gallery state={state} />
    </DogsStyled>
  )
}

export default Dogs
