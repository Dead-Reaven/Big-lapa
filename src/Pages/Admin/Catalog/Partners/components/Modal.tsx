import React from 'react'
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
  title?: string
  body?: string
  isOpen?: boolean
  onCancel(): any
  onSubmit(): any
}

function Modal({ title, body, isOpen, onCancel, onSubmit }: ModalProps) {
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
                <Button onClick={onSubmit}>Так</Button>
              </ModalActions>
            </StyledModal>
          </ModalOverlay>
        </ModalContainer>
      )}
    </>
  )
}

export default Modal
