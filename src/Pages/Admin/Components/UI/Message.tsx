import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  mode: 'green' | 'red'
}

const MessageContainer = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 20px;
  right: 0px;
  overflow: auto;
  padding: 10px;
  border: 2px solid;
  border-color: ${(props) => (props.mode === 'green' ? 'none' : 'red')};
  background-color: ${(props) => (props.mode === 'green' ? 'white' : 'white')};
  border-radius: 15px;
  color: black;
  z-index: 9999;
  button {
    margin-left: 15px;
    padding: 10px;
    background-color: orange;
    color: black;
    border-radius: 15px;
  }
`

interface MessageProps {
  children: React.ReactNode
  mode: 'green' | 'red'
  delay?: number
  hasButton?: boolean
}
const Message = ({ children, mode, hasButton, delay = 3000 }: MessageProps) => {
  const [show, setShow] = useState(true)

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClose()
    }, delay) // Adjust the delay time (in milliseconds) as needed

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return show ? (
    <MessageContainer mode={mode}>
      {children}
      {delay !== 3000 && <button onClick={handleClose}>OK</button>}
    </MessageContainer>
  ) : null
}

export default Message
