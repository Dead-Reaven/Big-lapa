import styled from 'styled-components'
import { theme } from '../../styles/Theme.styles'
import TitleH2 from '../../styles/TitleH2.styles'
import TitleH3 from '../../styles/TitleH3.styles'
import Container from '../../styles/Container.style'
import Button from '../../styles/Button.styles'

const StyledNotFound = styled(Container)`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: ${({ theme }) => theme.headerHeight};
  padding: 95px 16px 117px;
  max-width: 624px;

  ${TitleH3} {
    margin-bottom: 27px;
  }

  p {
    margin-bottom: 72px;
    font-size: ${({ theme }) => theme.fontSizes.bodyText};
    text-align: start;
  }

  ${Button} {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 100px;
  }

  @media (${theme.breakPoints.tablet}) {
    padding-top: 0;
    padding-bottom: 40px;

    ${TitleH3} {
      margin-bottom: 6px;
    }

    p {
      margin-bottom: 40px;
    }
  }

  @media (${theme.breakPoints.mobile}) {
    padding-top: 160px;
    padding-bottom: 180px;

    ${TitleH3} {
      margin-bottom: 20px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.mobileBodyText};
    }
  }
`

const ErrorCode = styled(TitleH2)`
  width: 100%;
  text-align: center;

  font-size: 200px;
  line-height: 100%;
  margin-bottom: 24px;
  margin-right: -0.1em;
  letter-spacing: 0.1em;

  @media (${theme.breakPoints.tablet}) {
    font-size: 120px;
    margin-right: -0.2em;
    margin-bottom: 8px;
  }

  @media (${theme.breakPoints.mobile}) {
    margin-bottom: 20px;
  }
`

export { StyledNotFound, ErrorCode }
