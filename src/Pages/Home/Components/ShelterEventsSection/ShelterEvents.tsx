import {
  StyledSection,
  StyledTitle,
  StyledParagraph,
  StyledText,
  FormInput,
  StyledForm,
  StyledContainer,
  StyledButton,
} from './ShelterEvents.style'

function ShelterEvents() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Події притулку</StyledTitle>
        <StyledParagraph>Стежте за останніми подіями притулку</StyledParagraph>
        <StyledText>
          Залиште свій email і ми повідомимо вам про новини притулку
        </StyledText>
        <StyledForm>
          <FormInput type="email" placeholder="email@gmail.com" />
          <StyledButton>Надіслати</StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledSection>
  )
}

export default ShelterEvents
