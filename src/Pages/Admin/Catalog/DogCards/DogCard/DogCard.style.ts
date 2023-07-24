import { styled } from 'styled-components'
import { theme } from '../../../../../Components/UI/Theme.styles'
import Button from '../../../../../Components/UI/Button.styles'
import PhotoIco from './img/photoIco.svg'

const DogCardContainer = styled.div`
  padding-bottom: 80px;

  @media (max-width: 1279px) {
    padding: 0 20px 80px;
  }
`

const StyledLink = styled.div`
  max-width: 83px;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: ${theme.fontSizes.subheadline};
  }
`

const DogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  max-width: 920px;

  label {
    font-size: ${theme.fontSizes.subheadline};
    margin-bottom: 12px;
  }

  ${Button} {
    width: 400px;
  }
`

const Photos = styled.div`
  max-width: 700px;
  height: 600px;
  align-self: start;
  display: flex;
  gap: 24px;
`

const MainPhoto = styled.div`
  background-color: #fff;
  width: 476px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const SidePhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`

const SidePhoto = styled.div`
  height: 88px;
  width: 88px;
  background: #fff url(${PhotoIco}) center / 20px no-repeat;
`

const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
    gap: 30px;
  }
`

const Input = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 14px;
  }
`

const Characteristics = styled.div`
  display: flex;
  gap: 85px;

  @media (max-width: 1439px) {
    gap: 50px;
    align-self: flex-start;
  }

  @media (max-width: 1279px) {
    gap: 50px;
    flex-wrap: wrap;
  }
`

const Characteristic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CharacteristicItem = styled.label`
  cursor: pointer;
  max-width: 220px;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 100%;
    transition: ${theme.transitions.quick};
    padding: 8px 16px 8px 8px;
    font-size: ${theme.fontSizes.buttonText};
    font-weight: ${theme.fontWeights.semiBold};

    svg {
      min-width: 40px;
      min-height: 40px;
    }
  }

  input[type='radio'] {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    width: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;

    &:checked + span {
      outline: 1px solid ${theme.colors.dark};
      border-radius: 4px;
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.grey};
    }
  }
`

const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    height: 330px;
    background-color: ${({ theme }) => theme.colors.background};
    caret-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.dark};
    padding: ${({ theme }) => theme.paddings.input};
    border: 1px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 4px;
    resize: none;
    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.yellow};
    }
  }
`
export {
  DogCardContainer,
  DogCardContent,
  StyledLink,
  Photos,
  MainPhoto,
  SidePhotos,
  SidePhoto,
  Inputs,
  Input,
  Characteristics,
  Characteristic,
  CharacteristicItem,
  Description,
}
