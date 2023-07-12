import { Link } from 'react-router-dom'
import { StyledItem, Text } from './Item.style'

interface props {
  children?: React.ReactNode
  text: string
  link: string
}

function Item(props: props) {
  const { children, text, link } = props
  return (
    <StyledItem>
      <Link to={link}>
        {children} <Text>{text}</Text>
      </Link>
    </StyledItem>
  )
}

export default Item
