import React, { useState } from 'react'
import { SidePhotosContainer, SidePhotosStyled } from '../DogCard.style'
import SidePhoto from './SidePhoto'
import Modal from '../../../../Components/UI/Modal'
import { DogType } from '../../../../../../API/types'

interface SidePhotosProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setSidePhotos: React.Dispatch<React.SetStateAction<File[]>>
  setDeletedPhotos: React.Dispatch<React.SetStateAction<string[]>>
  setInitialSidePhotos: React.Dispatch<React.SetStateAction<string[]>>
  dogData: DogType
}

function SidePhotos({
  setDogData,
  setSidePhotos,
  setDeletedPhotos,
  setInitialSidePhotos,
  dogData,
}: SidePhotosProps) {
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedSrc, setSelectedSrc] = useState<string>('')

  const sidePhotosAmount = [1, 2, 3, 4, 5, 6]

  const deletePhotoHandler = (id: string) => {
    setDogData({
      ...dogData,
      photos: dogData.photos?.filter((photo) => photo !== id),
    })
    setDeletedPhotos((deletedPhotos) => [...deletedPhotos, id])
    setInitialSidePhotos((initialSidePhotos) =>
      initialSidePhotos.filter((photo) => photo !== id),
    )
    setIsModalOpen((curr) => !curr)
  }

  return (
    <>
      <Modal
        title="Ви справді хочете видалити фото?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={deletePhotoHandler}
        id={selectedSrc}
      />
      <SidePhotosContainer>
        <SidePhotosStyled>
          {sidePhotosAmount.map((photo) => (
            <SidePhoto
              key={photo}
              photoNum={photo}
              setDogData={setDogData}
              dogData={dogData}
              setSidePhotos={setSidePhotos}
              setIsModalOpen={setIsModalOpen}
              setDeletePhotoSrc={setSelectedSrc}
            />
          ))}
        </SidePhotosStyled>
      </SidePhotosContainer>
    </>
  )
}

export default SidePhotos
