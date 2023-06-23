import styled from 'styled-components'

interface Props {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  height?: string
  width?: string
}

const Flex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  gap: ${({ gap }) => gap || 'normal normal'};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`

export default Flex
