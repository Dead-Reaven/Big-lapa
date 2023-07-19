import { Link } from 'react-router-dom'
import { ReactComponent as IcoPaws } from './img/Paws.svg'
import { ReactComponent as DeleteIco } from './img/delete.svg'
import { Buttons, StyledDogCard } from './Gallery.style'
import TitleH3 from '../UI/TitleH3.styles'
import Button from '../UI/Button.styles'

interface Dog {
  src: string
  name: string
  sex: string
  age: string
}
interface Props {
  dog: Dog
  admin?: boolean
}

function DogCard({ dog, admin }: Props) {
  const { src, name, sex, age } = dog
  return (
    <StyledDogCard>
      {!admin && (
        <Link to="/dog">
          <img src={src} alt="/dog" />
          <TitleH3>{name}</TitleH3>
          <p>
            {sex}, {age}
          </p>
          <IcoPaws />
        </Link>
      )}
      {admin && (
        <div>
          <img src={src} alt="/dog" />
          <TitleH3>{name}</TitleH3>
          <p>
            {sex}, {age}
          </p>
          <Buttons>
            <Button>Редагувати</Button>
            <Button>
              <DeleteIco />
            </Button>
          </Buttons>
        </div>
      )}
    </StyledDogCard>
  )
}

export default DogCard
