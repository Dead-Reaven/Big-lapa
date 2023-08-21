import React, { useState } from 'react'
import { MainPhotoStyled } from '../DogCard.style'
import { DogType } from '../../../../../../API/types'
import AddPhoto from './AddPhoto'
import Modal from '../../../../Components/UI/Modal'
import domen from '../../../../../../API/domen'

interface MainPhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setMainPhoto: React.Dispatch<React.SetStateAction<File | null>>
  setDeletedPhotos: React.Dispatch<React.SetStateAction<string[]>>
  dogData: DogType
}

function MainPhoto({
  setDogData,
  setMainPhoto,
  setDeletedPhotos,
  dogData,
}: MainPhotoProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const deleteMainPhotoHandler = () => {
    setDeletedPhotos((deletedPhotos) => [...deletedPhotos, dogData.mainPhoto])
    setDogData({ ...dogData, mainPhoto: '' })
    setIsDeleteModalOpen(false)
  }

  return (
    <>
      <Modal
        title="Ви справді хочете видалити фото?"
        body="Повернути дію буде неможливо"
        isOpen={isDeleteModalOpen}
        onCancel={() => setIsDeleteModalOpen(false)}
        onSubmit={deleteMainPhotoHandler}
        id="main"
      />
      <MainPhotoStyled>
        {dogData.mainPhoto && (
          <>
            <button type="button" onClick={() => setIsDeleteModalOpen(true)} />
            <img
              src={
                dogData.mainPhoto.includes('blob')
                  ? dogData.mainPhoto
                  : `${domen}/api/files/${dogData.mainPhoto}`
              }
              alt="dog"
            />
          </>
        )}
        <AddPhoto setDogData={setDogData} setMainPhoto={setMainPhoto} main={true} />
      </MainPhotoStyled>
    </>
  )
}

export default MainPhoto
