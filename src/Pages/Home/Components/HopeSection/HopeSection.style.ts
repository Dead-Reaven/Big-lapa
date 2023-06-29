import styled from 'styled-components'
import Container from '../../../../styles/Container.style'
import rectangle1 from '../../../../assets/HopeSection/rectangle1.png'

const StyledSection = styled.section`
  background-image: url(${rectangle1}), url(${rectangle1});
  background-repeat: no-repeat;
  background-position: 226px 99px, 84px 385px;
  padding-top: 97px;
  padding-bottom: 120px;
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledDogList = styled.ul`
  display: flex;
  width: 576px;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 44px;
  padding-top: 44px;

  li:nth-child(2) {
    margin-top: 87px;
  }

  li:nth-child(4) {
    margin-top: 87px;
  }
`
const StyledParagraphList = styled.ul`
  width: 624px;
  padding-top: 44px;
`

const StyledP = styled.p`
  margin-bottom: 45px;
`
export { StyledContainer, StyledDogList, StyledParagraphList, StyledSection, StyledP }
