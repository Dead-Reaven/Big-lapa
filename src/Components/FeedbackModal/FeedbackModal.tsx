import Button from '../UI/Button.styles'
import {
  ModalBody,
  ModalContainer,
  ModalImage,
  ModalOverlay,
  ModalText,
  ModalTitle,
  Subheadline,
  StyledModal,
  ModalContent,
  CloseButton,
} from './FeedbackModal.style'
import { ReactComponent as CloseIco } from './img/CloseIco.svg'
import { Link } from 'react-router-dom'

interface Props {
  isOpen?: boolean
  title?: string
  body?: string
  image: string
  onClose(): void
}

function FeedbackModal({ title, body, image, isOpen, onClose }: Props) {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalOverlay onClick={onClose}>
            <StyledModal onClick={(e) => e.stopPropagation()}>
              <ModalImage>
                <img src={image} alt="dog" />
              </ModalImage>
              <ModalContent>
                <ModalText>
                  <ModalTitle>{title}</ModalTitle>
                  <ModalBody>{body}</ModalBody>
                </ModalText>
                <Link to="/">
                  <Button>На головну</Button>
                </Link>
                <Subheadline>
                  Натисніть на кнопку, якщо бажаєте повернутися на головну
                </Subheadline>
              </ModalContent>
              <CloseButton onClick={onClose}>
                <CloseIco />
              </CloseButton>
            </StyledModal>
          </ModalOverlay>
        </ModalContainer>
      )}
    </>
  )
}

export default FeedbackModal
