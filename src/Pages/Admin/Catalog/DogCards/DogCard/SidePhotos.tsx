import React, { useState } from 'react'
import { SidePhotosContainer, SidePhotosStyled } from './DogCard.style'
import SidePhoto from './SidePhoto'
import Modal from '../../../Components/UI/Modal'
import { SingleDogType } from '../../../../../API/types'

interface MainPhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<SingleDogType>>
  dogData: SingleDogType
}

function SidePhotos({ setDogData, dogData }: MainPhotoProps) {
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedSrc, setSelectedSrc] = useState<string>('')

  const sidePhotosAmount = [1, 2, 3, 4, 5, 6]

  const deletePhotoHandler = (id: string) => {
    setDogData({
      ...dogData,
      photos: dogData.photos?.filter((photo) => photo.src !== id),
    })
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
