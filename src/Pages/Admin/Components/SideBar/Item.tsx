import { StyledItem, Text } from './Item.style'

interface props {
  children?: React.ReactNode
  text: string
}

function Item(props: props) {
  const { children, text } = props
  return (
    <StyledItem>
      {children} <Text>{text}</Text>
    </StyledItem>
  )
}

export default Item
