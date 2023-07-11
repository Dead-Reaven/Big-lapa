import { StyledItem } from './Item.style'

interface props {
  children?: React.ReactNode
  text: string
}

function Item(props: props) {
  const { children, text } = props
  return (
    <StyledItem>
      {children} {text}
    </StyledItem>
  )
}

export default Item
