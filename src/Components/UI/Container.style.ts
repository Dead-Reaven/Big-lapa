import { styled } from 'styled-components'

const Container = styled.div`
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes.bodyText};
  @media (min-width: 1440px) {
    padding: 0 84px;
  }
  @media (max-width: 1439px) {
    padding: ${({ theme }) => theme.paddings.containerTablet};
  }
  @media (max-width: 767px) {
    padding: ${({ theme }) => theme.paddings.containerMobile};
    font-size: ${({ theme }) => theme.fontSizes.mobileBodyText};
  }
`
export default Container
