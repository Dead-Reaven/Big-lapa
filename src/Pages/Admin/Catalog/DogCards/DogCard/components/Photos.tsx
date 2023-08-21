import React from 'react'
import { PhotosStyled } from '../DogCard.style'
import MainPhoto from './MainPhoto'
import SidePhotos from './SidePhotos'
import { DogType } from '../../../../../../API/types'

interface PhotosProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setSidePhotos: React.Dispatch<React.SetStateAction<File[]>>
  setMainPhoto: React.Dispatch<React.SetStateAction<File | null>>
  dogData: DogType
}

function Photos({ setDogData, setSidePhotos, setMainPhoto, dogData }: PhotosProps) {
  return (
    <PhotosStyled>
      <MainPhoto setDogData={setDogData} setMainPhoto={setMainPhoto} dogData={dogData} />
      <SidePhotos
        setDogData={setDogData}
        setSidePhotos={setSidePhotos}
        dogData={dogData}
      />
    </PhotosStyled>
  )
}

export default Photos
