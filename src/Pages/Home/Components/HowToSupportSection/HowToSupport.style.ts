import { styled } from 'styled-components'
import TitleH2 from '../../../../styles/TitleH2.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'

const StyledSection = styled.section`
  @media (max-width: 767px) {
    padding-bottom: 80px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 120px;
  }
`

const StyledTitle = styled(TitleH2)`
  text-align: center;
  margin-bottom: 60px;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 767px) {
    gap: 40px;
  }
`

const CardDiv = styled.div`
  text-align: center;
  flex: 0 1 43%;
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`

const StyledImg = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
`

const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  height: 33%;
  padding: 24px 0;
  border-radius: 0 0 4px 4px;
`

const StyledTitle3 = styled(TitleH3)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.background};
  @media (max-width: 767px) {
    margin-bottom: 8px;
  }
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.background};
  max-width: 440px;
`
export {
  StyledSection,
  FlexContainer,
  CardDiv,
  StyledTitle,
  StyledTextDiv,
  StyledImg,
  StyledTitle3,
  StyledParagraph,
}
