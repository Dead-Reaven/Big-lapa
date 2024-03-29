import styled from 'styled-components'
import Container from '../../../../Components/UI/Container.style'
import rectangle1 from './img/rectangle2.png'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'

const StyledSection = styled.section`
  padding: 0px 0px 20px 0px;

  @media (max-width: 767px) {
    padding: 80px 0;
  }
`
const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5.5%;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 767px) {
    gap: 30px;
  }
`
const StyledDogs = styled.div`
  background-image: url(${rectangle1}), url(${rectangle1});
  background-repeat: no-repeat;
  background-position: top right, bottom left;
  background-size: 75%;

  flex: 0 1 50%;
  display: flex;
  gap: 9%;
  padding: 44px 32px 104px;
  max-width: 576px;

  div {
    display: flex;
    flex-direction: column;
    gap: 44px;
  }

  div:nth-child(2) {
    margin-top: 87px;
  }

  @media (max-width: 1439px) {
    padding-bottom: 67px;
  }

  @media (max-width: 1024px) {
    padding-bottom: 104px;
    width: 100%;
  }

  @media (max-width: 767px) {
    padding: 26px 37px 18% 19px;
    gap: 9%;

    div {
      gap: 27px;
    }

    div:nth-child(2) {
      margin-top: 17%;
    }
  }
`
const StyledImages = styled.img`
  width: 100%;
`
const StyledParagraphList = styled.div`
  flex: 0 0 60%;
  max-width: 624px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`
const StyledTitle = styled(TitleH2)`
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 25px;
  }
`
const StyledP = styled.p`
  margin-bottom: 25px;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
`
export {
  StyledContainer,
  StyledDogs,
  StyledParagraphList,
  StyledSection,
  StyledP,
  StyledImages,
  StyledTitle,
}
