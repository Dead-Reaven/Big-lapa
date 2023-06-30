import { styled } from 'styled-components'
import TitleH2 from '../../../../styles/TitleH2.styles'
import TitleH3 from '../../../../styles/TitleH3.styles'

const StyledSection = styled.section`
  padding-bottom: 120px;
`
const StyledTitle = styled(TitleH2)`
  text-align: center;
`
const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`
const CardDiv = styled.div`
  width: 526px;
  text-align: center;
`
const StyledImg = styled.img`
  border-radius: 4px 4px 0 0;
  width: 526px;
`
const StyledTextDiv = styled.div`
  width: 526px;
  height: 149px;
  background-color: ${({ theme }) => theme.colors.green};
  padding: 20px 20px 20px;
  border-radius: 0 0 4px 4px;
`

const StyledTitle3 = styled(TitleH3)`
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.background};
`

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.background};
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
