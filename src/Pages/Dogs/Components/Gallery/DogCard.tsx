import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Paws } from './img/Paws.svg'
import { StyledDogCard } from './Gallery.style'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'

interface Props {
  src: string
}

function DogCard({ src }: Props) {
  const navigate = useNavigate()
  const navigateToDog = () => {
    navigate('/dog')
  }
  return (
    <StyledDogCard onClick={navigateToDog}>
      <img src={src} alt="dog" />
      <TitleH3>Скай</TitleH3>
      <p>Хлопчик, 2 роки</p>
      <Paws />
    </StyledDogCard>
  )
}

export default DogCard
