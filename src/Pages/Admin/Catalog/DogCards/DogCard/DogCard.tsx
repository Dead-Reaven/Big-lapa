import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
// API and types imports
import { DogType } from '../../../../../API/types'
import {
  getDog,
  patchDog,
  postDog,
  postDogImages,
  deleteDogImage,
} from '../../../../../API/fetchers/DogCards'

// UI components imports
import Modal from '../../../Components/UI/Modal'
import Message from '../../../Components/UI/Message'
import Photos from './components/Photos'
import ValidationMessage from './components/ValidationMessage'
import { DogCardContainer, DogCardContent, StyledLink } from './DogCard.style'
import TitleH2 from '../../../../../Components/UI/TitleH2.styles'
import Button from '../../../../../Components/UI/Button.styles'
import { ArrowIco } from './img/DogCardIcons'
import CharacteristicsSection from './components/CharacteristicsSection'
import DogCardInfo from './components/DogCardInfo'
import DogDescription from './components/DogDescription'

// Props interface
interface Props {
  $newCard?: boolean
}

// Initial state for the dog card data
const initialState: DogType = {
  mainPhoto: '',
  photos: [],
  name: '',
  sex: '',
  age: '',
  haschip: false,
  hasbreed: false,
  breed: '',
  size: '',
  description: '',
}

function DogCard({ $newCard }: Props) {
  console.log('dogcard')
  // main state
  const [dogData, setDogData] = useState<DogType>(initialState)
  // images
  const [mainPhoto, setMainPhoto] = useState<File | null>(null)
  const [initialSidePhotos, setInitialSidePhotos] = useState<string[]>([])
  const [sidePhotos, setSidePhotos] = useState<File[]>([])
  const [deletedPhotos, setDeletedPhotos] = useState<string[]>([])
  //
  const [imgIDs, setImgIDs] = useState<any>({
    mainPhoto: null,
    photos: [],
  })

  // modal
  const [IsModalOpen, setIsModalOpen] = useState(false)
  // validation
  const [isValidationFailed, setIsValidationFailed] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')

  // Query client for managing data
  const queryClient = useQueryClient()

  const { _id } = useParams<{ _id: string }>()

  const navigate = useNavigate()
  // Fetch the dog data if it's not a new card

  const { refetch: refetchDogData } = useQuery(['dog', _id], {
    enabled: !$newCard, // only run the query if $newCard is false
    initialData: dogData,
    queryFn: () => (_id ? getDog(_id) : Promise.resolve(null)),
    onSuccess: (data) => {
      if (_id && data !== null) {
        setDogData(data)
        setInitialSidePhotos(data.photos)
      }
    },
    refetchOnWindowFocus: false,
  })

  // Mutations for posting and patching dog data
  const { mutate: postDogData, isSuccess: isSuccessPost } = useMutation(
    () => {
      console.log('state for postDog', { dogData })
      return postDog(dogData)
    },
    {
      onSuccess: (data) => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['dog'] })
        // navigate to edit page with whe same ID of dog card
        navigate(`/admin/edit-card/${data._id}`)
        // refetchDogData()
      },
    },
  )

  const { mutate: patchDogData, isSuccess: isSuccessPatch } = useMutation(
    () => (_id ? patchDog(dogData, _id) : Promise.resolve()),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['dog'] })
        //! warn
      },
      onError(error) {
        console.error(error)
      },
    },
  )

  // Validate if the images have been uploaded
  const isValidImages = () => {
    if (dogData.mainPhoto === '') {
      setValidationMessage('Завантажте головне фото')
      return false
    }

    if (dogData.photos.length === 0) {
      setValidationMessage('Завантажте принаймні одне додаткове фото')
      return false
    }

    return true
  }

  // Process uploaded images and update the dog data
  const processImagesAndData = async () => {
    let updatedData = { mainPhoto: dogData.mainPhoto, photos: dogData.photos }
    if (mainPhoto) {
      const mainPhotoResponse = await uploadImage(mainPhoto, 'main-photo')
      updatedData = {
        ...updatedData,
        mainPhoto: mainPhotoResponse[0],
      }
    }

    if (sidePhotos[0]) {
      const sidePhotoResponse = await uploadImage(sidePhotos, 'side-photo')
      updatedData = {
        ...updatedData,
        photos: [...initialSidePhotos, ...sidePhotoResponse],
      }
    }
    console.log({ updatedData })
    setImgIDs(updatedData)

    return updatedData
  }

  // Handle the image upload process
  const uploadImage = async (imageData: any, type: string): Promise<string[]> => {
    try {
      return await postDogImages(imageData, type)
    } catch (error) {
      console.error(`Error uploading ${type} photo:`, error)
      return []
    }
  }

  // Update the dog data after the images have been uploaded
  const updateDogImages = (updatedData: Partial<DogType>) => {
    setDogData((prevDogData) => ({
      ...prevDogData,
      ...updatedData,
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const _isValidImages = isValidImages()
    setIsValidationFailed(!_isValidImages)

    if (!_isValidImages) {
      console.log('Validation failed')
      return
    } else {
      await updateDogImages(await processImagesAndData())
    }
  }

  useEffect(() => {
    const request = async () => {
      console.log({ imgIDs })
      $newCard ? postDogData() : patchDogData()
    }
    if (!!imgIDs.mainPhoto && !!imgIDs.photos.length) {
      // deletedPhotos.forEach((photo) => deleteDogImage(photo))
      request()
    }
  }, [imgIDs])

  // Component rendering
  return (
    <DogCardContainer>
      <Modal
        title="Введені дані не будуть збережені"
        body="Ви дійсно хочете покинути сторінку?"
        isOpen={IsModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onSubmit={() => setIsModalOpen(false)}
      />
      <StyledLink>
        <Link to="/admin">
          <ArrowIco />
          Назад
        </Link>
      </StyledLink>
      <DogCardContent onSubmit={handleSubmit}>
        <TitleH2>{$newCard ? 'Створення нової картки' : 'Редагування'}</TitleH2>
        <Photos
          setDogData={setDogData}
          setMainPhoto={setMainPhoto}
          setSidePhotos={setSidePhotos}
          setDeletedPhotos={setDeletedPhotos}
          setInitialSidePhotos={setInitialSidePhotos}
          dogData={dogData}
        />
        <DogCardInfo setDogData={setDogData} dogData={dogData} />
        <CharacteristicsSection setDogData={setDogData} dogData={dogData} />
        <DogDescription
          description={dogData.description || ''}
          setDescription={(desc) => setDogData({ ...dogData, description: desc })}
        />
        <Button type="submit">{$newCard ? 'Додати картку' : 'Оновити інформацію'}</Button>
        {isSuccessPost && <Message mode="green">Картка собаки успішно додана✔️</Message>}
        {isSuccessPatch && (
          <Message mode="green">Картка собаки успішно оновлена✔️</Message>
        )}
        {isValidationFailed && <ValidationMessage message={validationMessage} />}
      </DogCardContent>
    </DogCardContainer>
  )
}

export default DogCard
