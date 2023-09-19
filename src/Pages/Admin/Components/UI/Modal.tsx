import {
  ModalContainer,
  ModalOverlay,
  ModalText,
  StyledModal,
  ModalTitle,
  ModalBody,
  ModalActions,
} from './Modal.style'
import Button from '../../../../Components/UI/Button.styles'

interface ModalProps {
  id?: string
  title?: string
  body?: string
  isOpen: boolean
  logoId?: string
  onCancel(): void
  onSubmit(id: string): void
}

function Modal({ title, body, isOpen, onCancel, onSubmit, id }: ModalProps) {
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
                {id && <Button onClick={() => onSubmit(id)}>Так</Button>}
              </ModalActions>
            </StyledModal>
          </ModalOverlay>
        </ModalContainer>
      )}
    </>
  )
}

export default Modal
