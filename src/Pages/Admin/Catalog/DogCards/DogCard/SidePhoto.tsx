import React from 'react'
import { SidePhotoStyled } from './DogCard.style'
import AddPhoto from './AddPhoto'
import { SingleDogType } from '../../../../../API/types'

interface SidePhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<SingleDogType>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDeletePhotoId: React.Dispatch<React.SetStateAction<string>>
  dogData: SingleDogType
  photoNum: number
}

function SidePhoto({
  setDogData,
  setIsModalOpen,
  setDeletePhotoId,
  dogData,
  photoNum,
}: SidePhotoProps) {
  const photo = dogData.photos[photoNum - 1]

  const openModal = () => {
    setIsModalOpen(true)
    setDeletePhotoId(photo.id)
  }

  return (
    <SidePhotoStyled>
      {dogData.photos.length >= photoNum && (
        <>
          <button type="button" onClick={openModal} />
          <img src={photo?.src.toString()} alt="dog" />
        </>
      )}
      <AddPhoto setDogData={setDogData} side={true} />
    </SidePhotoStyled>
  )
}

export default SidePhoto
