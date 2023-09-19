import styled from 'styled-components'
import firstGreenRectangle from './img/First_green_rectangle.svg'
import secondGreenRectangle from './img/Second_green_rectangle.svg'
import Flex from '../../../../Components/UI/Flex.styles'
import Container from '../../../../Components/UI/Container.style'
import Button from '../../../../Components/UI/Button.styles'

const StyledDonation = styled.section`
  scroll-margin-top: 96px;
  background-image: url(${firstGreenRectangle}), url(${secondGreenRectangle});
  background-repeat: no-repeat;
  background-position: left top, right bottom;

  @media (max-width: 1279px) {
    background-position: -50px top, right bottom;
  }

  @media (max-width: 767px) {
    background-position: -150px top, right bottom;
  }
`

const DonationContainer = styled(Container)`
  padding-top: 45px;
  padding-bottom: 180px;
  @media (max-width: 1000px) {
    padding-left: 84px;
    padding-right: 84px;
  }

  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.paddings.containerMobile};
    padding-top: 40px;
    padding-bottom: 160px;
  }
`

const DonationContent = styled.div`
  z-index: 2;
`

const DonationFlex = styled(Flex)`
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 767px) {
    gap: 40px;
  }
`

const StyledDonationCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  padding: 20px 20px;
  &:nth-of-type(1) {
    flex: 1;
  }
  &:nth-of-type(2) {
    flex: 1.25;
    padding: 20px 40px;
  }

  p {
    max-width: 90%;
  }

  @media (max-width: 1000px) {
    padding: 20px 40px;

    &:nth-of-type(1) {
      padding: 20px 20px;
    }
  }

  @media (max-width: 767px) {
    p {
      max-width: 100%;
    }

    &:nth-of-type(2) {
      padding: 20px 12px;
    }
  }
`

const DonationText = styled.div`
  text-align: center;
`

const DonationFormFlex = styled(Flex)`
  width: 100%;
  max-width: 320px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  width: 100%;

  label:last-child {
    grid-column: span 2;
    max-width: 100%;
  }
`

const StyledAmount = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 4px;
  max-width: 140px;
  cursor: pointer;

  &:focus {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 54px;
    transition: ${({ theme }) => theme.transitions.quick};
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
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

    &:checked + span,
    &:checked + input[type='number'] {
      background-color: ${({ theme }) => theme.colors.lightGreen};
      z-index: 1;
    }
  }

  input[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    width: 100%;
    height: 100%;
    padding: 15px 37px;
    background-color: transparent;
    display: block;
    text-align: center;
    transition: ${({ theme }) => theme.transitions.quick};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.lightGreen};
      &::placeholder {
        color: transparent;
      }
    }
  }
`

const DonationButton = styled(Button)`
  max-width: 194px;
  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
  }
`

const StyledAdress = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  width: 100%;
  padding: 50px 20px 30px;
  border-radius: 5px;
  text-align: left;

  p {
    max-width: 100%;
    &:first-child {
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      margin-bottom: 10px;
    }
    &:nth-child(2) {
      max-width: 170px;
    }
  }

  @media (max-width: 767px) {
    padding: 12px 12px 56px;

    ${Flex} {
      flex-direction: column-reverse;
      gap: 12px;
    }

    p:nth-child(2) {
      max-width: 250px;
    }

    img {
      align-self: flex-end;
    }
  }
`

interface DogsProps {
  src?: string
}

const StyledDogs = styled.img<DogsProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  width: calc(20% + 150px);
  @media (max-width: 1000px) {
    width: 418px;
  }
  @media (max-width: 767px) {
    width: calc(20% + 190px);
  }
`

export {
  StyledDonation,
  DonationContainer,
  DonationContent,
  DonationFlex,
  StyledDonationCard,
  DonationText,
  DonationFormFlex,
  Grid,
  StyledAmount,
  DonationButton,
  StyledAdress,
  StyledDogs,
}
