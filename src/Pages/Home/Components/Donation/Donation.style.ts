import styled from 'styled-components'
import firstGreenRectangle from './img/First_green_rectangle.svg'
import secondGreenRectangle from './img/Second_green_rectangle.svg'
import Flex from '../../../../styles/Flex.styles'
import Container from '../../../../styles/Container.style'
import Button from '../../../../styles/Button.styles'

const StyledDonation = styled.section`
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

interface GridProps {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  height?: string
  width?: string
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`

const StyledAmount = styled.label`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  border-radius: 4px;
  cursor: pointer;

  &:focus {
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }

  span {
    display: block;
    width: 100%;
    height: 100%;
    transition: ${({ theme }) => theme.transitions.quick};
    padding: 15px 37px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }

    span {
      padding: 0;
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
      background-color: ${({ theme }) => theme.colors.lightGreen};
      z-index: 1;
    }
  }

  input[type='text'] {
    background-color: transparent;
    display: block;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.dark};
    }
  }
`

const DonationButton = styled(Button)`
  @media (max-width: 500px) {
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
  Grid,
  StyledAmount,
  DonationButton,
  StyledAdress,
  StyledDogs,
}
