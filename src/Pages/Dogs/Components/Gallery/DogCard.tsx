import React from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Paws } from './img/Paws.svg'
import { StyledDogCard } from './Gallery.style'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'

interface Props {
  src: string
}

function DogCard({ src }: Props) {
  return (
    <StyledDogCard>
      <NavLink to="dog">
        <img src={src} alt="dog" />
        <TitleH3>Скай</TitleH3>
        <p>Хлопчик, 2 роки</p>
        <Paws />
      </NavLink>
    </StyledDogCard>
  )
}

export default DogCard
