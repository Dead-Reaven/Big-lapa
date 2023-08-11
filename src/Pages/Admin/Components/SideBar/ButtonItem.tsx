import { StyledItem, Text } from './Item.style'

interface props {
  children?: React.ReactNode // ico
  text: string
  onClick: any
}

function ButtonItem(props: props) {
  const { children, text, onClick } = props

  return (
    <StyledItem onClick={onClick}>
      {children} <Text>{text}</Text>
    </StyledItem>
  )
}

export default ButtonItem
