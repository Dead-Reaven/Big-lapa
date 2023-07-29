import { styled, css } from 'styled-components'
import Button from '../UI/Button.styles'
import Flex from '../UI/Flex.styles'

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  height: ${({ theme }) => theme.headerHeight};
`

interface BurgerMenuProps {
  className?: string
  $extendNavbar?: boolean
}

const StyledBurgerMenu = styled(Flex)<BurgerMenuProps>`
  flex: 0.8;

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
    align-items: start;
    justify-content: start;
    gap: 40px;
    z-index: 5;
    position: fixed;
    width: 100%;
    max-width: 380px;
    height: 384px;
    background-color: ${({ theme }) => theme.colors.background};
    right: ${({ $extendNavbar }) => ($extendNavbar ? '0' : '-100%')};
    top: 98px;
    padding: 44px 40px 78px;
    overflow: auto;
    transition: all ease 0.3s;
    font-size: ${({ theme }) => theme.fontSizes.mobileBodyText};
  }

  @media (max-width: 767px) {
    align-items: center;
    max-width: 100%;
    height: 100vh;
    top: 90px;
    gap: 100px;
    font-size: ${({ theme }) => theme.fontSizes.bodyText};
  }
`

const StyledNavBar = styled.nav`
  @media (max-width: 1279px) {
    width: 100%;
  }
`

const NavFlex = styled(Flex)`
  @media (max-width: 1279px) {
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 40px;
  }
`

const StyledNavItem = styled.li`
  transition: ${({ theme }) => theme.transitions.quick};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }

  @media (max-width: 1279px) {
    width: 100%;
    text-align: start;

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
      top: 20px;
      left: 0;
    }
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`

interface HeaderRightProps {
  $extendNavbar?: boolean
}

const StyledHeaderRight = styled(Flex)<HeaderRightProps>`
  @media (max-width: 1279px) {
    width: 315px;
  }

  @media (max-width: 767px) {
    width: 240px;
    ${({ $extendNavbar }) => $extendNavbar && 'flex-direction: row-reverse;'}
  }
`
interface HeaderButtonProps {
  $extendNavbar?: boolean
}

const HeaderButton = styled(Button)<HeaderButtonProps>`
  @media (max-width: 1279px) {
    padding: 10px 12.5px;
    font-size: ${({ theme }) => theme.fontSizes.mobileButtonText};
  }
  @media (max-width: 767px) {
    padding: 12.5px 23px;
    span {
      display: none;
    }
    &::after {
      content: 'Підтримати';
    }

    ${({ $extendNavbar }) => $extendNavbar && 'display: none;'};
  }
`

interface BurgerBtnProps {
  $isActive?: boolean
}

const StyledBurgerBtn = styled.button<BurgerBtnProps>`
  display: none;

  @media (max-width: 1279px) {
    display: block;
    flex: 0 0 35px;
    height: 20px;
    position: relative;
    z-index: 3;

    span,
    &::before,
    &::after {
      content: '';
      right: 0;
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.dark};
      transition: all 0.3s ease 0s;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }

    span {
      top: calc(50% - 2px);
    }

    ${({ $isActive }) =>
      $isActive &&
      css`
        span {
          width: 0;
        }
        &::before {
          top: calc(50% - 2px);
          transform: rotate(-45deg);
          border-radius: 0;
        }
        &::after {
          bottom: calc(50% - 2px);
          transform: rotate(45deg);
          border-radius: 0;
        }
      `}
  }
`

export {
  StyledHeader,
  StyledBurgerMenu,
  StyledHeaderRight,
  HeaderButton,
  StyledNavBar,
  NavFlex,
  StyledNavItem,
  StyledBurgerBtn,
}
