import styled from 'styled-components'

interface Props {
  className?: string
  src?: string
}

const StyledSecondRectangle = styled.img<Props>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
`

export default StyledSecondRectangle
