import { Link } from 'react-router-dom'
import { ReactComponent as IcoPaws } from './img/Paws.svg'
import { ReactComponent as DeleteIco } from './img/delete.svg'
import { Buttons, StyledDogCard } from './Gallery.style'
import TitleH3 from '../UI/TitleH3.styles'
import Button from '../UI/Button.styles'
import { DogType } from '../../API/types'
import { UseMutateFunction } from '@tanstack/react-query'
import Modal from '../../Pages/Admin/Components/UI/Modal'
import { useState } from 'react'
import domen from '../../API/domen'
import deleteDogImage from '../../API/fetchers/DogCards/deleteDogImage'
import { Circles } from 'react-loader-spinner'

interface Props {
  dog: DogType
  admin?: boolean
  onDeleteDog?: UseMutateFunction<void, unknown, string, unknown>
}

function DogCard({ dog, admin, onDeleteDog }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [isMainPhotoLoaded, setIsTheMainPhotoLoaded] = useState(false)
  const { _id, name, sex, age, mainPhoto, photos } = dog

  const deleteHandler = () => {
    if (_id && onDeleteDog) {
      deleteDogImage(mainPhoto)
      photos.forEach((photo) => {
        deleteDogImage(photo)
      })
      onDeleteDog(_id)
      console.log('delete')
    }
  }

  const dogPhoto = mainPhoto ? (
    mainPhoto.includes('blob') ? (
      mainPhoto
    ) : (
      `${domen}/api/files/${mainPhoto}`
    )
  ) : (
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
  return (
    <StyledDogCard>
      <Modal
        title="Ви справді хочете видалити картку собаки?"
        body="Повернути дію буде неможливо"
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={deleteHandler}
        id={_id}
      />
      {!admin && (
        <Link to={`/dog/${_id}/${name}`}>
          <img
            src={dogPhoto}
            // onLoad={() => setIsTheMainPhotoLoaded(true)}
            // onError={() => setIsTheMainPhotoLoaded(false)}
            alt="/dog"
          />
          {/* {isMainPhotoLoaded ? null : (
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )} */}
          <TitleH3>{name}</TitleH3>
          <p>
            {sex}, {age}
          </p>
          <IcoPaws />
        </Link>
      )}
      {admin && (
        <>
          <Link to={`/admin/edit-card/${_id}`}>
            <img
              src={
                mainPhoto.includes('blob') ? mainPhoto : `${domen}/api/files/${mainPhoto}`
              }
              alt="/dog"
            />
            <TitleH3>{name}</TitleH3>
            <p>
              {sex}, {age}
            </p>
          </Link>
          <Buttons>
            <Link to={`/admin/edit-card/${_id}`}>
              <Button>Редагувати</Button>
            </Link>
            <Button onClick={() => setIsModalOpen(true)}>
              <DeleteIco />
            </Button>
          </Buttons>
        </>
      )}
    </StyledDogCard>
  )
}

export default DogCard
