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
  src?: any
  admin?: boolean
}

function DogCard({ dog, src, admin }: Props) {
  const { name, sex, age } = dog
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
        <Link to="/admin/dog-card">
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
        </Link>
      )}
    </StyledDogCard>
  )
}

export default DogCard
