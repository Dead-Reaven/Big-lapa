import { Link } from 'react-router-dom'
import {
  Characteristic,
  CharacteristicItem,
  Characteristics,
  Description,
  DogCardContainer,
  DogCardContent,
  Input,
  Inputs,
  MainPhoto,
  Photos,
  SidePhoto,
  SidePhotos,
  StyledLink,
} from './DogCard.style'
import TitleH2 from '../../../../../Components/UI/TitleH2.styles'
import StyledInput from '../../../../../Components/UI/Input.styles'
import Button from '../../../../../Components/UI/Button.styles'
import {
  PhotoIco,
  ArrowIco,
  FemaleIco,
  MaleIco,
  SizeIco,
  BreedIco,
  ChipIco,
} from './img/DogCardIcons'
import TitleH3 from '../../../../../Components/UI/TitleH3.styles'

function DogCard() {
  return (
    <DogCardContainer>
      <StyledLink>
        <Link to="/admin">
          <ArrowIco />
          Назад
        </Link>
      </StyledLink>
      <DogCardContent>
        <TitleH2 marginBottom="0px">Створення нової картки</TitleH2>
        <Photos>
          <MainPhoto>
            <PhotoIco />
            <TitleH3>Завантажити фото</TitleH3>
          </MainPhoto>
          <div>
            <SidePhotos>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
            </SidePhotos>
          </div>
        </Photos>
        <Inputs>
          <Input>
            <label htmlFor="dog-name">Кличка собаки:</label>
            <StyledInput type="text" placeholder="Введіть кличку собаки" id="dog-name" />
          </Input>
          <Input>
            <label htmlFor="dog-age">Вік собаки:</label>
            <StyledInput type="text" placeholder="Введіть вік собаки" id="dog-age" />
          </Input>
        </Inputs>
        <Characteristics>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="sex" />
              <span>
                <FemaleIco /> Дівчинка
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="sex" />
              <span>
                <MaleIco />
                Хлопчик
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="size" />
              <span>
                <SizeIco />
                Великий
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="size" />
              <span>
                <SizeIco />
                Середній
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="size" />
              <span>
                <SizeIco />
                Маленький
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="breed" />
              <span>
                <BreedIco />
                Без породи
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="breed" />
              <span>
                <BreedIco />
                <input type="text" placeholder="Введіть породу" />
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="chip" />
              <span>
                <ChipIco />
                Так
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="chip" />
              <span>
                <ChipIco />
                Hі
              </span>
            </CharacteristicItem>
          </Characteristic>
        </Characteristics>
        <Description>
          <label htmlFor="dog-about">Про тваринку:</label>
          <textarea placeholder="Опишіть тваринку" id="dog-about" />
        </Description>
        <Button>Додати картку</Button>
      </DogCardContent>
    </DogCardContainer>
  )
}

export default DogCard
