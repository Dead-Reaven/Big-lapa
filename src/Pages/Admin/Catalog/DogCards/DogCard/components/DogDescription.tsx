import { Description } from '../DogCard.style'

interface DogDescriptionProps {
  description: string
  setDescription: (desc: string) => void
}

const DogDescription = ({ description, setDescription }: DogDescriptionProps) => {
  return (
    <Description>
      <label htmlFor="dog-about">Про тваринку:</label>
      <textarea
        placeholder="Опишіть тваринку"
        id="dog-about"
        defaultValue={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
    </Description>
  )
}

export default DogDescription
