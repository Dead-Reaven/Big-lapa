import { Link, useLocation } from 'react-router-dom'
import { GreenMark, StyledItem, Text } from './Item.style'

interface props {
  children?: React.ReactNode // ico
  text: string
  link: string
}

function Item(props: props) {
  const { children, text, link } = props

  const isActive = () => useLocation().pathname === link

  return (
    <StyledItem>
      <Link to={link}>
        <GreenMark $active={isActive()} /> {children} <Text>{text}</Text>
      </Link>
    </StyledItem>
  )
}

export default Item
