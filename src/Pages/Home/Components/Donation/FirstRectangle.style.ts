import styled from 'styled-components'

interface Props {
  className?: string
  src?: string
}

const StyledFirstRectangle = styled.img<Props>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`

export default StyledFirstRectangle
