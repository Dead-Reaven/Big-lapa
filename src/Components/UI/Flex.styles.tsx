import styled from 'styled-components'

interface Props {
  $direction?: string
  $align?: string
  $justify?: string
  $gap?: string
  $height?: string
  $width?: string
  $fullheight?: boolean /* 100vh - header */
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  height: ${({ $fullheight, $height }) => ($fullheight ? 'calc(100vh - 96px)' : $height)};
  width: ${({ $width }) => $width || 'auto'};
`

export default Flex
