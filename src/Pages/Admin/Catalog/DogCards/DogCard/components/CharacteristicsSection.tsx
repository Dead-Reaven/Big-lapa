import { Characteristic, CharacteristicItem, Characteristics } from '../DogCard.style'
import { DogType } from '../../../../../../API/types'
import { BreedIco, ChipIco, FemaleIco, MaleIco, SizeIco } from '../img/DogCardIcons'

interface Props {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  dogData: DogType
}

function CharacteristicsSection({ dogData, setDogData }: Props) {
  return (
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
  )
}

export default CharacteristicsSection
