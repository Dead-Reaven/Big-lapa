import { styled } from 'styled-components'
import Flex from '../../../../Components/UI/Flex.styles'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'

const PartnersSection = styled.section`
  padding: 120px 0;

  @media (max-width: 1279px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
`

const PartnersTitle = styled(TitleH2)`
  text-align: center;
`

const PartnersFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 60px;
  flex-wrap: wrap;
`

export { PartnersSection, PartnersTitle, PartnersFlex }
