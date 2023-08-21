import React from 'react'
import { SidePhotoStyled } from '../DogCard.style'
import AddPhoto from './AddPhoto'
import { DogType } from '../../../../../../API/types'

interface SidePhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setSidePhotos: React.Dispatch<React.SetStateAction<File[]>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDeletePhotoSrc: React.Dispatch<React.SetStateAction<string>>
  dogData: DogType
  photoNum: number
}

function SidePhoto({
  setDogData,
  setSidePhotos,
  setIsModalOpen,
  setDeletePhotoSrc,
  dogData,
  photoNum,
}: SidePhotoProps) {
  const photo = dogData.photos[photoNum - 1]

  const openModal = () => {
    setIsModalOpen(true)
    setDeletePhotoSrc(photo)
  }

  return (
    <SidePhotoStyled>
      {dogData.photos.length >= photoNum && (
        <>
          <button type="button" onClick={openModal} />
          <img src={photo} alt="dog" />
        </>
      )}
      <AddPhoto setDogData={setDogData} setSidePhotos={setSidePhotos} />
    </SidePhotoStyled>
  )
}

export default SidePhoto
