import styled from 'styled-components'

const MessageContainer = styled.div`
  align-self: flex-end;
  position: sticky;
  bottom: 20px;
  right: 0;
  padding: 10px;
  border: 2px solid;
  border-color: red;
  background-color: white;
  border-radius: 15px;
  color: black;
  z-index: 9999;
`

interface Props {
  message: string
}

const ValidationMessage = ({ message }: Props) => {
  return <MessageContainer>{message}</MessageContainer>
}

export default ValidationMessage
