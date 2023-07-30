import {
  ModalContainer,
  ModalOverlay,
  ModalText,
  StyledModal,
  ModalTitle,
  ModalBody,
  ModalActions,
} from './Modal.style'
import Button from '../../../../../Components/UI/Button.styles'

interface ModalProps {
  logoId: string
  title?: string
  body?: string
  isOpen?: boolean
  onCancel(): void
  onSubmit(id: string): void
}

function Modal({ title, body, isOpen, onCancel, onSubmit, logoId }: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalOverlay>
            <StyledModal>
              <ModalText>
                <ModalTitle>{title}</ModalTitle>
                <ModalBody>{body}</ModalBody>
              </ModalText>
              <ModalActions>
                <Button onClick={onCancel}>Ні</Button>
                <Button onClick={() => onSubmit(logoId)}>Так</Button>
              </ModalActions>
            </StyledModal>
          </ModalOverlay>
        </ModalContainer>
      )}
    </>
  )
}

export default Modal
