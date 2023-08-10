import React, { useState } from 'react'
import { MainPhotoStyled } from './DogCard.style'
import { SingleDogType } from '../../../../../API/types'
import AddPhoto from './AddPhoto'
import Modal from '../../../Components/UI/Modal'

interface MainPhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<SingleDogType>>
  dogData: SingleDogType
}

function MainPhoto({ setDogData, dogData }: MainPhotoProps) {
  const [IsModalOpen, setIsModalOpen] = useState(false)

  const deleteMainPhotoHandler = () => {
    setDogData({ ...dogData, mainPhoto: '' })
    setIsModalOpen((curr) => !curr)
  }

  return (
    <>
      <Modal
        title="Ви справді хочете видалити фото?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={deleteMainPhotoHandler}
        id="main"
      />
      <MainPhotoStyled>
        {dogData.mainPhoto && (
          <>
            <button type="button" onClick={() => setIsModalOpen(true)} />
            <img src={dogData.mainPhoto} alt="dog" />
          </>
        )}
        <AddPhoto setDogData={setDogData} main={true} />
      </MainPhotoStyled>
    </>
  )
}

export default MainPhoto
