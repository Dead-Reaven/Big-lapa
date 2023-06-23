import StyledButton from '../../../styles/Button.styles'
import {
  StyledSection,
  StyledTitle,
  StyledParagraph,
  StyledText,
  FormInput,
  StyledForm,
} from './ShelterEvents.style'

function ShelterEvents() {
  return (
    <StyledSection>
      <StyledTitle>Події притулку</StyledTitle>
      <StyledParagraph>Стежте за останніми подіями притулку</StyledParagraph>
      <StyledText>Залиште свій email і ми повідомимо вам про новини притулку</StyledText>
      <StyledForm>
        <FormInput type="email" placeholder="email@gmail.com" />
        <StyledButton>Надіслати</StyledButton>
      </StyledForm>
    </StyledSection>
  )
}

export default ShelterEvents
