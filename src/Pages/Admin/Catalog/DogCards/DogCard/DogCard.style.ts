import { styled } from 'styled-components'
import { theme } from '../../../../../Components/UI/Theme.styles'
import Button from '../../../../../Components/UI/Button.styles'
import CrossIco from './img/Cross.svg'
import TitleH2 from '../../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../../Components/UI/TitleH3.styles'

const DogCardContainer = styled.div`
  padding-bottom: 80px;

  ${TitleH2} {
    margin-bottom: 0;
    @media (max-width: 767px) {
      text-align: center;
    }
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

const DogCardContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 55px;
  max-width: 920px;

  label {
    font-size: ${theme.fontSizes.subheadline};
    margin-bottom: 12px;
  }

  ${Button} {
    width: 400px;
  }

  @media (max-width: 767px) {
    gap: 40px;

    ${Button} {
      width: 100%;
    }
  }
`

const PhotosStyled = styled.div`
  max-width: 700px;
  width: 100%;
  align-self: start;
  display: flex;

  @media (max-width: 500px) {
    height: 262px;
    align-self: center;
  }
`

const AddPhotoStyled = styled.div`
  width: 100%;
  height: 100%;
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;

    p {
      font-size: ${theme.fontSizes.buttonText};
      font-weight: ${theme.fontWeights.semiBold};
    }
  }

  input[type='file'] {
    height: 1px;
    width: 1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
`

const MainPhotoStyled = styled.div`
  background-color: #fff;
  width: 68%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 24px;

  aspect-ratio: 4.76 / 6;

  img {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    z-index: 6;
    background: ${theme.colors.background} url(${CrossIco}) center / 28px no-repeat;
    top: 4px;
    right: 4px;
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  @media (max-width: 1279px) {
    margin-right: 18px;
  }

  @media (max-width: 767px) {
    margin-right: 16px;
    svg {
      width: 32px;
      height: 32px;
    }
    ${TitleH3} {
      font-size: 16px;
    }
  }
`

const SidePhotosContainer = styled.div`
  width: 28%;
`

const SidePhotosStyled = styled.div`
  width: 90%;
  max-width: 194px;
  max-height: 312px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 24px;

  @media (max-width: 1279px) {
    gap: 18px;
  }

  @media (max-width: 767px) {
    gap: 16px;
  }
`

const SidePhotoStyled = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;

  img {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    z-index: 6;
    background: ${theme.colors.background} url(${CrossIco}) center / 14px no-repeat;
    top: 4px;
    right: 4px;
    width: 18px;
    height: 18px;
    border-radius: 4px;
  }

  svg {
    height: 20px;
    width: 20px;
  }
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

  @media (max-width: 767px) {
    width: 100%;
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
    column-gap: 124px;
    row-gap: 40px;
    flex-wrap: wrap;
  }
`

const Characteristic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1279px) {
    &:nth-of-type(1) {
      margin-right: 63px;
    }
  }
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

    @media (max-width: 767px) {
      font-size: ${theme.fontSizes.mobileButtonText};
      svg {
        min-width: 32px;
        min-height: 32px;
      }
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
    color: ${({ theme }) => theme.colors.grey};
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
  PhotosStyled,
  AddPhotoStyled,
  MainPhotoStyled,
  SidePhotosContainer,
  SidePhotosStyled,
  SidePhotoStyled,
  Inputs,
  Input,
  Characteristics,
  Characteristic,
  CharacteristicItem,
  Description,
}
