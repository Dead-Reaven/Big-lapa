import React, { useState, useEffect } from 'react'
import Button from '../UI/Button.styles'
import Container from '../UI/Container.style'
import { StyledCookies } from './Cookies.style'
import Flex from '../UI/Flex.styles'

function Cookies() {
  const [showPanel, setShowPanel] = useState(!localStorage.getItem('cookieAgreement'))
  const [scrolledToBottom, setScrolledToBottom] = useState(false)

  const handleAgree = () => {
    localStorage.setItem('cookieAgreement', 'true')
    setShowPanel(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const totalHeight = document.documentElement.scrollHeight
      const currentPosition = window.scrollY
      setScrolledToBottom(currentPosition + windowHeight >= totalHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {showPanel && (
        <StyledCookies $scrolledToBottom={scrolledToBottom}>
          <Container>
            <Flex $align="center" $justify="space-between" $gap="30px">
              <p>
                Цей сайт використовує файли cookies для правильної роботи і покращення
                сервісу. <br />
                Якщо ви погоджуєтесь з їхнім використанням, натисніть ОК. Більше
                інформації в &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/Dead-Reaven/Big-lapa"
                >
                  Політика конфіденційності.
                </a>
              </p>
              <Button onClick={handleAgree}>OK</Button>
            </Flex>
          </Container>
        </StyledCookies>
      )}
    </>
  )
}

export default Cookies
