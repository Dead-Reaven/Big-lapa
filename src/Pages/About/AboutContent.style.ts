import { styled } from 'styled-components'
import { theme } from '../../Components/UI/Theme.styles'
import TitleH2 from '../../Components/UI/TitleH2.styles'
import TitleH3 from '../../Components/UI/TitleH3.styles'

const AboutStyled = styled.section`
  padding: 105px 0 110px;

  @media (max-width: 1023px) {
    padding: 85px 0;
  }

  @media (max-width: 767px) {
    padding: 65px 0;
  }
`

const AboutTitle = styled(TitleH2)`
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 1023px) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
`

const AboutGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 70px;

  @media (max-width: 1439px) {
    gap: 12px;
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    gap: 12px;
  }
`

const GalleryImg = styled.div`
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  img {
    height: 100%;
    width: 100%;
  }
`

const AboutParagraphs = styled.div`
  max-width: 1056px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 90px;
`

const AboutParagraph = styled.div`
  max-width: 624px;
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 767px) {
    gap: 12px;
  }

  svg {
    min-width: 48px;
  }
  &:nth-of-type(2n) {
    align-self: end;
    svg path {
      fill: ${theme.colors.yellow};
    }
  }
`

const AboutContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AboutAdress = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 25px;
`

const AdressTitle = styled(TitleH3)`
  margin-bottom: 40px;
`

export {
  AboutStyled,
  AboutTitle,
  AboutGallery,
  GalleryImg,
  AboutParagraphs,
  AboutParagraph,
  AboutContacts,
  AboutAdress,
  AdressTitle,
}
