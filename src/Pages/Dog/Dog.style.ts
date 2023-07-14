import styled from 'styled-components'
import { theme } from '../../Components/UI/Theme.styles'
import Container from '../../Components/UI/Container.style'
import Flex from '../../Components/UI/Flex.styles'

const DogStyled = styled.section`
  color: ${theme.colors.dark};
  margin-top: ${theme.headerHeight};
  padding-top: 24px;
  padding-bottom: 48px;
`

const DogContainer = styled(Container)`
  background-color: rgb(181, 194, 104, 50%);
  padding-top: 64px;
  padding-bottom: 64px;
  border-radius: 4px;
`

const DogFlex = styled(Flex)``

const Slider = styled.div`
  flex: 1;
`

const DogContent = styled.div`
  flex: 1.2;
`

export { DogStyled, DogContainer, DogFlex, Slider, DogContent }
