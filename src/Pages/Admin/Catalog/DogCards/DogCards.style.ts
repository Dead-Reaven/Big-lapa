import { styled } from 'styled-components'
import Button from '../../../../Components/UI/Button.styles'
import { Link } from 'react-router-dom'
const StyledDogCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1439px) {
    gap: 60px;
  }

  @media (max-width: 767px) {
    gap: 40px;
  }
`

const AdminGalleryButton = styled(Button)`
  align-self: flex-end;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1439px) {
    align-self: center;
  }

  @media (max-width: 1279px) {
    align-self: flex-end;
  }
`

const AddCardsLink = styled(Link)`
  align-self: flex-end;
  max-width: 400px;
  width: 100%;

  @media (max-width: 1439px) {
    align-self: center;
  }

  @media (max-width: 1279px) {
    align-self: flex-end;
  }
`

export { StyledDogCards, AdminGalleryButton, AddCardsLink }
