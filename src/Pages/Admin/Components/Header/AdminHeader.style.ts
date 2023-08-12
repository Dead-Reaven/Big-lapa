import { styled } from 'styled-components'
import { theme } from '../../../../Components/UI/Theme.styles'
import { ReactComponent as Logo } from './Logo.svg'

const StyledHeader = styled.header`
  width: 97%;
  height: 96px;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd66;
  /* text */
  color: ${theme.colors.dark};
  /* Desktop & 1280 px/H3 */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  /* Flex */
  display: flex;
  align-items: center;
  gap: 2.7%;
`
const Icon = styled(Logo)``

const NamePosition = styled.p`
  margin-left: auto;

  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`

export { Icon, NamePosition, StyledHeader }
