import React from 'react'
import { AddPhotoStyled } from '../DogCard.style'
import { PhotoIco } from '../img/DogCardIcons'
import { DogType } from '../../../../../../API/types'

interface AddPhotoProps {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  setMainPhoto?: React.Dispatch<React.SetStateAction<File | null>>
  setSidePhotos?: React.Dispatch<React.SetStateAction<File[]>>
  main?: boolean
}

function AddPhoto({ setDogData, setMainPhoto, setSidePhotos, main }: AddPhotoProps) {
  const fileChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement>,
    isMain: boolean,
  ) => {
    const selectedFile = e.target.files?.[0]
    console.log(selectedFile)

    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile)

      if (isMain) {
        setDogData((prevDogData) => ({
          ...prevDogData,
          mainPhoto: fileUrl,
        }))
        setMainPhoto(selectedFile)
      } else {
        setDogData((prevDogData) => ({
          ...prevDogData,
          photos: [...prevDogData.photos, fileUrl],
        }))
        setSidePhotos((prevSidePhotos) => [...prevSidePhotos, selectedFile])
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

      {!main && (
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
