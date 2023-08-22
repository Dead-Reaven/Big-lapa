import { DogType } from '../../../../../../API/types'
import { Input, Inputs } from '../DogCard.style'
import StyledInput from '../../../../../../Components/UI/Input.styles'

interface Props {
  setDogData: React.Dispatch<React.SetStateAction<DogType>>
  dogData: DogType
}

function DogCardInfo({ dogData, setDogData }: Props) {
  return (
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
  )
}

export default DogCardInfo
