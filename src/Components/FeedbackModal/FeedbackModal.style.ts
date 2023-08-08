import { styled } from 'styled-components'
import { theme } from '../UI/Theme.styles'
import TitleH1 from '../UI/TitleH1.style'
import Button from '../UI/Button.styles'

const ModalContainer = styled.div`
  z-index: 10;
`
const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
`

const StyledModal = styled.div`
  z-index: 15;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.background};
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1056px;
  height: 800px;
  max-height: 80vh;
  font-size: ${theme.fontSizes.bodyText};

  @media (max-width: 1279px) {
    max-width: 768px;
    max-height: 512px;
    flex-direction: column;
    padding-top: 31px;
  }

  @media (max-width: 767px) {
    max-width: 393px;
    padding-top: 0;
    height: 608px;
    max-height: 100%;
    justify-content: center;
    font-size: ${theme.fontSizes.mobileBodyText};
    a {
      width: 100%;
    }
  }
`

const ModalImage = styled.div`
  flex: 38%;
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1279px) {
    width: 126px;
    max-height: 126px;
    border-radius: 50%;
    overflow: hidden;

    img {
      object-position: 100% 25%;
    }
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 54px;

  @media (max-width: 767px) {
    margin: 0 16px;
  }

  ${Button} {
    margin-bottom: 12px;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`

const ModalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  margin-bottom: 60px;
`

const ModalTitle = styled(TitleH1)`
  text-align: center;

  @media (max-width: 1279px) {
    font-size: ${theme.fontSizes.h1};
  }

  @media (max-width: 767px) {
    font-size: ${theme.fontSizes.mobileH1};
    max-width: 206px;
  }
`

const ModalBody = styled.div`
  max-width: 540px;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }
`

const Subheadline = styled.p`
  color: ${theme.colors.grey};
  font-size: ${theme.fontSizes.subheadline};

  @media (max-width: 767px) {
    font-size: ${theme.fontSizes.mobileSubheadline};
  }
`

interface CloseButtonProps {
  onClick: any
}

const CloseButton = styled.button<CloseButtonProps>`
  position: absolute;
  top: 20px;
  right: 20px;
`

export {
  ModalContainer,
  StyledModal,
  ModalOverlay,
  ModalImage,
  ModalContent,
  ModalText,
  ModalTitle,
  ModalBody,
  Subheadline,
  CloseButton,
}
