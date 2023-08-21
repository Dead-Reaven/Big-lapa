import React from 'react'
import { PhotosStyled } from '../DogCard.style'
import MainPhoto from './MainPhoto'
import SidePhotos from './SidePhotos'
import { DogType } from '../../../../../../API/types'

interface PhotosProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setSidePhotos: React.Dispatch<React.SetStateAction<File[]>>
  setMainPhoto: React.Dispatch<React.SetStateAction<File | null>>
  setDeletedPhotos: React.Dispatch<React.SetStateAction<string[]>>
  dogData: DogType
}

function Photos({
  setDogData,
  setSidePhotos,
  setMainPhoto,
  setDeletedPhotos,
  dogData,
}: PhotosProps) {
  return (
    <PhotosStyled>
      <MainPhoto
        setDogData={setDogData}
        setMainPhoto={setMainPhoto}
        setDeletedPhotos={setDeletedPhotos}
        dogData={dogData}
      />
      <SidePhotos
        setDogData={setDogData}
        setSidePhotos={setSidePhotos}
        setDeletedPhotos={setDeletedPhotos}
        dogData={dogData}
      />
    </PhotosStyled>
  )
}

export default Photos
