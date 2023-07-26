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
  SidePhotosContainer,
  StyledLink,
} from './DogCard.style'
import TitleH2 from '../../../../../Components/UI/TitleH2.styles'
import StyledInput from '../../../../../Components/UI/Input.styles'
import Button from '../../../../../Components/UI/Button.styles'
import TitleH3 from '../../../../../Components/UI/TitleH3.styles'

import dog1 from '../../../../Dog/Components/DogSlider/img/dog1.png'
import {
  PhotoIco,
  ArrowIco,
  FemaleIco,
  MaleIco,
  SizeIco,
  BreedIco,
  ChipIco,
} from './img/DogCardIcons'

interface Props {
  newCard?: boolean
}

function DogCard({ newCard }: Props) {
  const data = {
    name: 'Джулі',
    age: '10 місяців',
    sex: 'Дівчинка',
    size: 'Великий',
    breed: 'Лабрадор',
    chip: 'Так',
    description: `Джулі - чарівна та енергійна собачка, яка відмінно ладнає з іншими собаками і людьми. Вона обожнює прогулянки і гратися з м'ячиком.\n
    Джулі має певні медичні проблеми, і для підтримки її здоров'я їй потрібні регулярні ліки та спеціальний догляд. Незважаючи на свої проблеми, Джулі є надзвичайно лагідною та люблячою собакою.\n
    Ваші пожертви допоможуть нам забезпечити Джулі необхідними ліками, медичним та спеціальним доглядом.
    Ваша підтримка дозволить нам зробити все можливе для поліпшення її стану і забезпечити їй комфортні умови проживання.`,
  }

  return (
    <DogCardContainer newCard={newCard}>
      <StyledLink>
        <Link to="/admin">
          <ArrowIco />
          Назад
        </Link>
      </StyledLink>
      <DogCardContent>
        <TitleH2>{newCard ? 'Створення нової картки' : 'Редагування'}</TitleH2>
        <Photos>
          <MainPhoto>
            {newCard ? (
              <>
                <PhotoIco />
                <TitleH3>Завантажити фото</TitleH3>
              </>
            ) : (
              <img src={dog1} alt="dog1" />
            )}
          </MainPhoto>

          <SidePhotosContainer>
            <SidePhotos>
              <SidePhoto>
                {newCard ? (
                  <></>
                ) : (
                  <>
                    <img src={dog1} alt="dog1" />
                    <button />
                  </>
                )}
              </SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
              <SidePhoto></SidePhoto>
            </SidePhotos>
          </SidePhotosContainer>
        </Photos>
        <Inputs>
          <Input>
            <label htmlFor="dog-name">Кличка собаки:</label>
            <StyledInput
              type="text"
              placeholder={newCard ? 'Введіть кличку собаки' : data.name}
              id="dog-name"
            />
          </Input>
          <Input>
            <label htmlFor="dog-age">Вік собаки:</label>
            <StyledInput
              type="text"
              placeholder={newCard ? 'Введіть вік собаки' : data.age}
              id="dog-age"
            />
          </Input>
        </Inputs>
        <Characteristics>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="sex" defaultChecked={!newCard} />
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
              <input type="radio" name="size" defaultChecked={!newCard} />
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
              <input type="radio" name="breed" defaultChecked={!newCard} />
              <span>
                <BreedIco />
                Без породи
              </span>
            </CharacteristicItem>
            <CharacteristicItem>
              <input type="radio" name="breed" />
              <span>
                <BreedIco />
                <input
                  type="text"
                  placeholder={newCard ? 'Введіть вік собаки' : data.breed}
                />
              </span>
            </CharacteristicItem>
          </Characteristic>
          <Characteristic>
            <CharacteristicItem>
              <input type="radio" name="chip" defaultChecked={!newCard} />
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
          <textarea
            placeholder="Опишіть тваринку"
            id="dog-about"
            defaultValue={newCard ? '' : data.description}
          ></textarea>
        </Description>
        <Button>{newCard ? 'Додати картку' : 'Оновити інформацію'}</Button>
      </DogCardContent>
    </DogCardContainer>
  )
}

export default DogCard
