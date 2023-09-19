import { styled } from 'styled-components'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import { theme } from '../../../../Components/UI/Theme.styles'
import Button from '../../../../Components/UI/Button.styles'

const ModalContainer = styled.div`
  z-index: 10;
`
const ModalOverlay = styled.div`
  background-color: rgba(217, 217, 217, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.background};
  border: 1px solid ${theme.colors.grey};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 60px 75px;

  @media (max-width: 1279px) {
    padding: 40px 35px;
  }

  @media (max-width: 767px) {
    padding: 26px;
  }
`
const ModalText = styled.div`
  text-align: center;
`
const ModalTitle = styled(TitleH3)`
  margin-bottom: 20px;
`
const ModalBody = styled.div``

const ModalActions = styled.div`
  display: flex;
  gap: 40px;

  ${Button} {
    width: 150px !important;
  }

  @media (max-width: 767px) {
    gap: 8px;
  }
`

export {
  ModalContainer,
  StyledModal,
  ModalOverlay,
  ModalText,
  ModalTitle,
  ModalBody,
  ModalActions,
}
