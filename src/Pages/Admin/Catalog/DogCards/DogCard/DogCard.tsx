import { useState } from 'react'
import { Link } from 'react-router-dom'
// react query
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
// api types
import { SingleDogType } from '../../../../../API/types'
// fetchers
import postDog from '../../../../../API/fetchers/DogCards/postDog'
//components
import Modal from '../../../Components/UI/Modal'
import MainPhoto from './MainPhoto'
import SidePhotos from './SidePhotos'
//styles
import {
  Characteristic,
  CharacteristicItem,
  Characteristics,
  Description,
  DogCardContainer,
  DogCardContent,
  Input,
  Inputs,
  Photos,
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

interface Props {
  $newCard?: boolean
}

const initialState = {
  mainPhoto: '',
  photos: [],
  name: '',
  sex: '',
  age: '',
  haschip: false,
  hasbreed: false,
  size: '',
  description: ``,
}

function DogCard({ $newCard }: Props) {
  const [dogData, setDogData] = useState<SingleDogType>(initialState)
  const [IsModalOpen, setIsModalOpen] = useState(false)

  // useQuery({
  //   queryKey: ['dog'],
  //   initialData: initialState,
  //   queryFn
  // })

  // useQuery({
  //   queryKey: ['dog'],
  //   initialData: initialState,
  //   queryFn: fetchDog,
  //   onSuccess: (data) => {
  //     setDogData(data)
  //   },
  // })

  // const queryClient = useQueryClient()

  // const { mutate, isSuccess } = useMutation(() => postDog(dogData), {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['dog'] })
  //   },
  // })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(dogData)
  }

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
        <Photos>
          <MainPhoto setDogData={setDogData} dogData={dogData} />
          <SidePhotos setDogData={setDogData} dogData={dogData} />
        </Photos>
        <Inputs>
          <Input>
            <label htmlFor="dog-name">Кличка собаки:</label>
            <StyledInput
              type="text"
              placeholder={$newCard ? 'Введіть кличку собаки' : dogData.name}
              id="dog-name"
              onChange={(event) => setDogData({ ...dogData, name: event.target.value })}
            />
          </Input>
          <Input>
            <label htmlFor="dog-age">Вік собаки:</label>
            <StyledInput
              type="text"
              placeholder={$newCard ? 'Введіть вік собаки' : dogData.age}
              id="dog-age"
              onChange={(event) => setDogData({ ...dogData, age: event.target.value })}
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
                defaultChecked={dogData.sex === 'Дівчинка'}
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
                defaultChecked={dogData.sex === 'Хлопчик'}
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
                defaultChecked={dogData.size === 'Великий'}
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
                defaultChecked={dogData.size === 'Середній'}
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
                defaultChecked={dogData.size === 'Маленький'}
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
                defaultChecked={!dogData.hasbreed}
                onChange={() => setDogData({ ...dogData, hasbreed: false })}
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
                  placeholder={dogData.breed ? dogData.breed : 'Введіть породу'}
                  onChange={(event) =>
                    setDogData({ ...dogData, breed: event.target.value, hasbreed: true })
                  }
                />
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input
                type="radio"
                name="chip"
                defaultChecked={dogData.haschip}
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
                defaultChecked={!dogData.haschip}
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
      </DogCardContent>
    </DogCardContainer>
  )
}

export default DogCard
