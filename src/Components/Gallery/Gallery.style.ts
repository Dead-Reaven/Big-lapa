import { styled, css } from 'styled-components'
import { theme } from '../UI/Theme.styles'
import Container from '../UI/Container.style'
import TitleH3 from '../UI/TitleH3.styles'
import Flex from '../UI/Flex.styles'

interface Props {
  $admin?: boolean
}

const StyledGallery = styled.section<Props>`
  margin-bottom: 110px;

  @media (max-width: 1279px) {
    margin-bottom: 80px;
  }

  @media (max-width: 767px) {
    margin-bottom: 60px;
  }

  ${({ $admin }) =>
    $admin &&
    css`
      ${Container} {
        padding: 0;
        margin: 0;
        width: 100%;
      }

      ${Flex} {
        align-items: end;

        @media (max-width: 1439px) {
          align-items: center;
        }

        @media (max-width: 1024px) {
          align-items: end;
        }
      }

      ${DogsAmount} {
        align-self: flex-end;
      }

      ${DogsCards} {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;

        @media (max-width: 1439px) {
          gap: 17px;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      ${StyledDogCard} {
        p {
          margin-bottom: 20px;
        }

        button {
          width: 100%;

          @media (max-width: 1279px) {
            padding: 17px 2px;
          }
        }

        &:hover {
          all: unset;
          text-align: left;
        }
      }
    `}
`

const DogsAmount = styled(TitleH3)`
  align-self: start;
  margin-bottom: 40px;
  span {
    color: ${theme.colors.grey};
  }
`

const DogsCards = styled.div`
  display: grid;
  width: 100%;
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

  @media (max-width: 1279px) {
    gap: 8px;
  }

  :nth-child(2) {
    max-width: 56px;
    padding: 16px;

    @media (max-width: 1279px) {
      padding: 16px 2px;
    }

    svg {
      /* align-self: center;
      position: relative; */
      display: block;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
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
  DogsAmount,
  DogsCards,
  StyledDogCard,
  Buttons,
  Pagination,
  PaginationButton,
  PaginationNav,
}
