import styled from 'styled-components'
import { theme } from '../../Components/UI/Theme.styles'
import Flex from '../../Components/UI/Flex.styles'

const DogStyled = styled.section`
  color: ${theme.colors.dark};
  margin-top: ${theme.headerHeight};
  padding-top: 24px;
  padding-bottom: 48px;

  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 50%);
    padding-top: 50px;
  }

  @media (max-width: 767px) {
    padding-top: 25px;
  }
`

const DogContainer = styled.div`
  background-color: rgb(181, 194, 104, 50%);
  width: 100%;
  border-radius: 4px;
  padding: 64px;
  @media (max-width: 1439px) {
    padding: 48px;
  }
  @media (max-width: 1279px) {
    background-color: rgb(181, 194, 104, 0%);
    padding: 0;
  }
`

const DogFlex = styled(Flex)`
  gap: 108px;

  @media (max-width: 1439px) {
    gap: 66px;
  }

  @media (max-width: 1279px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    gap: 32px;
  }
`

const Slider = styled.div`
  flex: 1;
`

const DogContent = styled.div`
  flex: 1.2;
  max-width: 560px;

  @media (max-width: 1279px) {
    max-width: 100%;
  }
`

const DogTitle = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-bottom: 30px;
  line-height: 1;
  h2,
  h3 {
    margin: 0;
  }
`

const Lables = styled(Flex)`
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    margin-bottom: 0px;
  }
`

const LabelTitle = styled.p`
  font-size: ${theme.fontSizes.subheadline};
  margin-bottom: 8px;

  @media (max-width: 767px) {
    font-size: ${theme.fontSizes.mobileSubheadline};
  }
`

const LabelStyled = styled.div`
  font-weight: ${theme.fontWeights.semiBold};
  padding: 8px 16px;
  background-color: ${theme.colors.background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 767px) {
    svg {
      width: 32px;
      height: 32px;
    }
  }
`

const DogText = styled.div`
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

const HiddenDogText = styled.div`
  display: none;
  p {
    white-space: pre-line;
  }
  @media (max-width: 1024px) {
    display: block;
  }
`

export {
  DogStyled,
  DogContainer,
  DogFlex,
  Slider,
  DogContent,
  DogTitle,
  Lables,
  LabelTitle,
  LabelStyled,
  DogText,
  HiddenDogText,
}
