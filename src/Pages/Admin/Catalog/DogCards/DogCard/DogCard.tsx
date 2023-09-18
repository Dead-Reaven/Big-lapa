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
  // deleteDogImage,
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
  const [dogData, setDogData] = useState<DogType>(initialState)
  const [initialSidePhotos, setInitialSidePhotos] = useState<string[]>([])
  const [, setDeletedPhotos] = useState<string[]>([])
  const [sidePhotos, setSidePhotos] = useState<File[]>([])
  const [mainPhoto, setMainPhoto] = useState<File | null>(null)
  const [IsModalOpen, setIsModalOpen] = useState(false)
  // const [canPost, setCanPost] = useState(false)
  const [isValidationFailed, setIsValidationFailed] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')
  const [acceptRequest, setAcceptRequest] = useState(false)

  // Query client for managing data
  const queryClient = useQueryClient()

  const navigate = useNavigate()
  const { _id } = useParams<{ _id: string }>()

  const { refetch, isLoading, isRefetching } = useQuery(['dog', _id], {
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
  const {
    mutate: postDogData,
    isSuccess: isSuccessPost,
    isLoading: isLoadingPostDog,
  } = useMutation(() => postDog(dogData), {
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['dog'] })
      navigate(`/admin/edit-card/${data._id}`)
    },
  })

  const {
    mutate: patchDogData,
    isSuccess: isSuccessPatch,
    isLoading: isLoadingPatchDog,
  } = useMutation(() => (_id ? patchDog(dogData, _id) : Promise.resolve()), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['dog'] })
      setDeletedPhotos([])
      refetch()
      // window.location.reload()
    },
  })

  // Validate if the images have been uploaded
  const validateImages = () => {
    if (dogData.mainPhoto === '') {
      setValidationMessage('Завантажте головне фото')
      return true
    }

    if (dogData.photos.length === 0) {
      setValidationMessage('Завантажте принаймні одне додаткове фото')
      return true
    }

    return false
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

    return updatedData
  }

  // Handle the image upload process
  const uploadImage = async (imageData: any, type: string): Promise<string[]> => {
    try {
      const response = await postDogImages(imageData, type)
      return response
    } catch (error) {
      console.error(`Error uploading ${type} photo:`, error)
      return []
    }
  }

  // Update the dog data after the images have been uploaded
  const updateDogImages = async (updatedData: Partial<DogType>) => {
    await setDogData((prevDogData) => ({
      ...prevDogData,
      ...updatedData,
    }))
  }

  // Logic to determine whether to create a new dog card or update an existing one
  const request = async () => {
    $newCard ? postDogData() : patchDogData()
    setAcceptRequest(false)
  }

  // Effect to handle the creation or update process after the images have been uploaded

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationFailed = validateImages()
    setIsValidationFailed(validationFailed)

    if (validationFailed) {
      console.log('Validation failed')
      return
    } else {
      try {
        await updateDogImages(await processImagesAndData())
        await setAcceptRequest(true)
        // await request()
      } catch (error) {
        console.error('Error uploading photos:', error)
      }
    }
  }
  useEffect(() => {
    if (acceptRequest) {
      request()
    }
  }, [acceptRequest])

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
        {(isLoadingPostDog || isLoadingPatchDog) && (
          <Message mode="green">Відправка данних ⌛</Message>
        )}
        {(isLoading || isRefetching) && (
          <Message mode="green">Отримання данних ⌛</Message>
        )}
        {isValidationFailed && <ValidationMessage message={validationMessage} />}
      </DogCardContent>
    </DogCardContainer>
  )
}

export default DogCard
