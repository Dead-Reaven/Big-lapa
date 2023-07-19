import { styled, css } from 'styled-components'
import { theme } from '../UI/Theme.styles'
import TitleH2 from '../UI/TitleH2.styles'
import Container from '../UI/Container.style'
import Flex from '../UI/Flex.styles'
import Button from '../UI/Button.styles'

interface Props {
  admin?: boolean
}

const StyledGallery = styled.section<Props>`
  padding: 110px 0;

  @media (max-width: 1279px) {
    padding: 80px 0;
  }

  ${({ admin }) =>
    admin &&
    css`
      padding: 0 !important;

      ${Container} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${Flex} {
        align-items: end;
      }

      ${DogsCards} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1279px) {
          gap: 20px;
        }

        @media (max-width: 767px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${StyledDogCard} {
        p {
          margin-bottom: 20px;
        }

        button {
          width: 100%;
        }

        &:hover {
          all: unset;
          text-align: left;
        }
      }
    `}
`

const AdminGalleryButton = styled(Button)`
  max-width: 400px;
  width: 100%;
  margin-bottom: 80px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`

const GalleryTitle = styled(TitleH2)`
  margin-bottom: 60px;
`

const DogsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 40px;
  margin-bottom: 55px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const StyledDogCard = styled.div`
  background-color: ${theme.colors.background};
  transition: ${theme.transitions.long}, border 0s;
  text-align: left;
  img {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  svg {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (min-width: 1280px) {
    &:hover {
      padding: 11px;
      transform: scale(1.2) rotate(-6deg);
      border: 2px solid ${theme.colors.lightGreen};
      border-radius: 4px;
      z-index: 5;

      svg {
        display: block;
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 12px;

  :nth-child(2) {
    max-width: 56px;
    padding: 16px;

    svg {
      position: relative;
      display: block;
    }
  }
`

const Pagination = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.dark};
  padding: 15px 60px;
  border-radius: 4px;
  font-size: ${theme.fontSizes.buttonText};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: ${theme.lineHeights.normal};
  transition: ${theme.transitions.quick};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:hover {
    border-width: 2px;
  }
  &:disabled {
    opacity: 0.6;
  }
`

const PaginationNav = styled.ul`
  display: flex;
  gap: 24px;

  li {
    color: ${theme.colors.lightGrey};
    font-size: 24px;

    &:hover {
      transition: ${theme.transitions.quick};
      cursor: pointer;
      color: ${theme.colors.dark};
    }
  }
`

export {
  StyledGallery,
  AdminGalleryButton,
  GalleryTitle,
  DogsCards,
  StyledDogCard,
  Buttons,
  Pagination,
  PaginationButton,
  PaginationNav,
}
