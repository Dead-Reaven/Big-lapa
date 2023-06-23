import styled from 'styled-components'

interface Props {
  className?: string
  src?: string
}

const StyledDogs = styled.img<Props>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
`

export default StyledDogs
