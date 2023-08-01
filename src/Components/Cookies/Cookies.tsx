import React, { useState } from 'react'
import Button from '../UI/Button.styles'
import Container from '../UI/Container.style'
import { StyledCookies } from './Cookies.style'
import Flex from '../UI/Flex.styles'

function Cookies() {
  const [showPanel, setShowPanel] = useState(!localStorage.getItem('cookieAgreement'))

  const handleAgree = () => {
    localStorage.setItem('cookieAgreement', 'true')
    setShowPanel(false)
  }

  return (
    <>
      {showPanel && (
        <StyledCookies>
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
