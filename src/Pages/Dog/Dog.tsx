import { useParams } from 'react-router'
import { useState } from 'react'
import Container from '../../Components/UI/Container.style'
import TitleH2 from '../../Components/UI/TitleH2.styles'
import TitleH3 from '../../Components/UI/TitleH3.styles'
import Label from './Label'
import DogSlider from './Components/DogSlider/DogSlider'
import { ReactComponent as FemaleIco } from './img/female.svg'
import { ReactComponent as MaleIco } from './img/male.svg'
import { ReactComponent as BreedIco } from './img/breed.svg'
import { ReactComponent as ChipIco } from './img/chip.svg'
import { ReactComponent as SizeIco } from './img/size.svg'
import {
  DogStyled,
  DogContainer,
  DogFlex,
  Slider,
  DogContent,
  DogTitle,
  Lables,
  DogText,
  HiddenDogText,
} from './Dog.style'
import { DogType } from '../../API/types'
import { useQuery } from '@tanstack/react-query'
import getDog from '../../API/fetchers/DogCards/getDog'

function Dog() {
  const [dogState, setDogState] = useState<DogType>()

  const { id } = useParams()

  useQuery(['dog', id], {
    initialData: dogState,
    queryFn: () => (id ? getDog(id) : Promise.resolve(null)),
    onSuccess: (data) => {
      if (id && data !== null) {
        setDogState(data)
        console.log(data)
      }
    },
  })

  const dog = dogState

  const {
    name,
    age,
    sex,
    size,
    hasbreed,
    breed,
    haschip,
    photos,
    mainPhoto,
    description,
  } = dog || {}

  return (
    <DogStyled data-testid="dogs-page">
      <Container>
        <DogContainer>
          <DogFlex>
            {description && (
              <HiddenDogText>
                <TitleH3 $marginBottom="24px">Про тваринку:</TitleH3>
                <p>{description}</p>
              </HiddenDogText>
            )}

            {photos && (
              <Slider>
                <DogSlider photos={mainPhoto ? [mainPhoto, ...photos] : photos} />
              </Slider>
            )}

            <DogContent>
              <DogTitle>
                <TitleH2>{name}</TitleH2>
                <TitleH3>{age}</TitleH3>
              </DogTitle>
              <Lables>
                <Label text="Стать" value={sex}>
                  {sex === 'Дівчинка' ? <FemaleIco /> : <MaleIco />}
                </Label>
                <Label text="Порода" value={hasbreed ? breed : 'Без породи'}>
                  <BreedIco />
                </Label>
                <Label text="Розмір" value={size}>
                  <SizeIco />
                </Label>
                <Label text="Наявність чіпа" value={haschip ? 'Так' : 'Ні'}>
                  <ChipIco />
                </Label>
              </Lables>
              {description && (
                <DogText>
                  <TitleH3 $marginBottom="24px">Про тваринку:</TitleH3>
                  <p>{description}</p>
                </DogText>
              )}
            </DogContent>
          </DogFlex>
        </DogContainer>
      </Container>
    </DogStyled>
  )
}

export default Dog
