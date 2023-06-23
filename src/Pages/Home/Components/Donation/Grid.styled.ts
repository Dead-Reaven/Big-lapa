import styled from 'styled-components'

interface Props {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  height?: string
  width?: string
}

const Grid = styled.div<Props>`
  display: grid;
  grid-gap: 20px 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;

  label:last-child {
    grid-column: span 2;
  }
`

export default Grid
