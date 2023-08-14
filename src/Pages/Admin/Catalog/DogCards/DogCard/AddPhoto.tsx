import React from 'react'
import { AddPhotoStyled } from './DogCard.style'
import { PhotoIco } from './img/DogCardIcons'
import { SingleDogType } from '../../../../../API/types'

interface AddPhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<SingleDogType>>
  side?: boolean
  main?: boolean
}

function AddPhoto({ setDogData, side, main }: AddPhotoProps) {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, isMain: boolean) => {
    const selectedFile = e.target.files?.[0]

    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile)

      const newPhoto = fileUrl

      if (isMain) {
        setDogData((prevDogData) => ({
          ...prevDogData,
          mainPhoto: newPhoto,
        }))
      } else {
        setDogData((prevDogData) => ({
          ...prevDogData,
          photos: [...prevDogData.photos, newPhoto],
        }))
      }

      e.target.value = ''
    }
  }

  return (
    <AddPhotoStyled>
      {main && (
        <>
          <input
            type="file"
            accept="image/*"
            name="mainPhoto"
            id="mainPhoto"
            onChange={(e) => fileChangeHandler(e, true)}
          />
          <label htmlFor="mainPhoto">
            <PhotoIco />
          </label>
        </>
      )}

      {side && (
        <>
          <input
            type="file"
            accept="image/*"
            name="photo"
            id="photo"
            onChange={(e) => fileChangeHandler(e, false)}
          />
          <label htmlFor="photo">
            <PhotoIco />
          </label>
        </>
      )}
    </AddPhotoStyled>
  )
}

export default AddPhoto
