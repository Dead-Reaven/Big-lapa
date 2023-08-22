import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

import { DogType } from '../../../../../API/types'

import {
  getDog,
  patchDog,
  postDog,
  postDogImages,
  deleteDogImage,
} from '../../../../../API/fetchers/DogCards/dogFetchers'

import Modal from '../../../Components/UI/Modal'
import Message from '../../../Components/UI/Message'
import Photos from './components/Photos'
import ValidationMessage from './components/ValidationMessage'

import {
  Characteristic,
  CharacteristicItem,
  Characteristics,
  Description,
  DogCardContainer,
  DogCardContent,
  Input,
  Inputs,
  StyledLink,
} from './DogCard.style'

import TitleH2 from '../../../../../Components/UI/TitleH2.styles'
import StyledInput from '../../../../../Components/UI/Input.styles'
import Button from '../../../../../Components/UI/Button.styles'

import {
  ArrowIco,
  FemaleIco,
  MaleIco,
  SizeIco,
  BreedIco,
  ChipIco,
} from './img/DogCardIcons'

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
  // State management
  const [dogData, setDogData] = useState<DogType>(initialState)
  const [initialSidePhotos, setInitialSidePhotos] = useState<string[]>([])
  const [deletedPhotos, setDeletedPhotos] = useState<string[]>([])
  const [sidePhotos, setSidePhotos] = useState<File[]>([])
  const [mainPhoto, setMainPhoto] = useState<File | null>(null)
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [canPost, setCanPost] = useState(false)
  const [isValidationFailed, setIsValidationFailed] = useState(false)
  const [validationMessage, setValidationMessage] = useState('')

  const navigate = useNavigate()
  // Get dog ID from URL params
  const { _id } = useParams<{ _id: string }>()
  const isFirstRender = useRef(0)

  // Fetch dog data if not creating a new card
  if (!$newCard) {
    useQuery(['dog', _id], {
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
  }

  // Query client for managing data
  const queryClient = useQueryClient()

  // Mutations for posting and patching dog data
  const { mutate: postDogData, isSuccess: isSuccessPost } = useMutation(
    () => postDog(dogData),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['dog'] })
        navigate('/admin/')
      },
    },
  )

  const { mutate: patchDogData, isSuccess: isSuccessPatch } = useMutation(
    () => (_id ? patchDog(dogData, _id) : Promise.resolve()),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ['dog'] })
        deletedPhotos.forEach((photo) => deleteDogImage(photo))
        navigate('/admin/')
      },
    },
  )

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

  // Process uploaded images and data
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

  // Upload an image
  const uploadImage = async (imageData: any, type: string): Promise<string[]> => {
    try {
      const response = await postDogImages(imageData, type)
      return response
    } catch (error) {
      console.error(`Error uploading ${type} photo:`, error)
      return []
    }
  }

  // Update dog data with new images
  const updateDogImages = async (updatedData: Partial<DogType>) => {
    await setDogData((prevDogData) => ({
      ...prevDogData,
      ...updatedData,
    }))
    setCanPost(true)
  }

  // Handle posting or patching data based on mode
  const handlePostOrPatch = () => {
    if ($newCard) {
      postDogData()
    } else {
      patchDogData()
    }
  }

  // Effect to handle posting or patching data
  useEffect(() => {
    if (isFirstRender.current < 2) {
      //TODO зв'ясувати чому canPost змінюється
      isFirstRender.current++
      return
    }
    handlePostOrPatch()
  }, [canPost])

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
        const imageData = await processImagesAndData()
        await updateDogImages(imageData)
      } catch (error) {
        console.error('Error uploading photos:', error)
      }
    }
  }

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
        <Inputs>
          <Input>
            <label htmlFor="dog-name">Кличка собаки:</label>
            <StyledInput
              type="text"
              placeholder={'Введіть кличку собаки'}
              value={dogData.name}
              id="dog-name"
              onChange={(event) => setDogData({ ...dogData, name: event.target.value })}
              required
            />
          </Input>
          <Input>
            <label htmlFor="dog-age">Вік собаки:</label>
            <StyledInput
              type="text"
              placeholder={'Введіть вік собаки'}
              value={dogData.age}
              id="dog-age"
              onChange={(event) => setDogData({ ...dogData, age: event.target.value })}
              required
            />
          </Input>
        </Inputs>
        <Characteristics>
          <Characteristic>
            <CharacteristicItem>
              <input
                type="radio"
                name="sex"
                value="Дівчинка"
                checked={dogData.sex === 'Дівчинка'}
                onChange={(event) => setDogData({ ...dogData, sex: event.target.value })}
              />
              <span>
                <FemaleIco /> Дівчинка
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input
                type="radio"
                name="sex"
                value="Хлопчик"
                checked={dogData.sex === 'Хлопчик'}
                onChange={(event) => setDogData({ ...dogData, sex: event.target.value })}
              />
              <span>
                <MaleIco />
                Хлопчик
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input
                type="radio"
                name="size"
                value="Великий"
                checked={dogData.size === 'Великий'}
                onChange={(event) => setDogData({ ...dogData, size: event.target.value })}
              />
              <span>
                <SizeIco />
                Великий
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input
                type="radio"
                name="size"
                value="Середній"
                checked={dogData.size === 'Середній'}
                onChange={(event) => setDogData({ ...dogData, size: event.target.value })}
              />
              <span>
                <SizeIco />
                Середній
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input
                type="radio"
                name="size"
                value="Маленький"
                checked={dogData.size === 'Маленький'}
                onChange={(event) => setDogData({ ...dogData, size: event.target.value })}
              />
              <span>
                <SizeIco />
                Маленький
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input
                type="radio"
                name="breed"
                checked={!dogData.hasbreed}
                onChange={() => setDogData({ ...dogData, hasbreed: false, breed: '' })}
              />
              <span>
                <BreedIco />
                Без породи
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input
                type="radio"
                name="breed"
                checked={dogData.hasbreed}
                onChange={() => {
                  setDogData({ ...dogData, hasbreed: true })
                }}
              />
              <span>
                <BreedIco />
                <input
                  type="text"
                  placeholder={'Введіть породу'}
                  value={dogData.breed}
                  onChange={(event) =>
                    setDogData({ ...dogData, breed: event.target.value, hasbreed: true })
                  }
                  required={dogData.hasbreed}
                />
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input
                type="radio"
                name="chip"
                checked={dogData.haschip}
                onChange={() => setDogData({ ...dogData, haschip: true })}
              />
              <span>
                <ChipIco />
                Так
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input
                type="radio"
                name="chip"
                checked={!dogData.haschip}
                onChange={() => setDogData({ ...dogData, haschip: false })}
              />
              <span>
                <ChipIco />
                Hі
              </span>
            </CharacteristicItem>
          </Characteristic>
        </Characteristics>
        <Description>
          <label htmlFor="dog-about">Про тваринку:</label>
          <textarea
            placeholder="Опишіть тваринку"
            id="dog-about"
            defaultValue={$newCard ? '' : dogData.description}
            onChange={(event) =>
              setDogData({ ...dogData, description: event.target.value })
            }
          ></textarea>
        </Description>
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
