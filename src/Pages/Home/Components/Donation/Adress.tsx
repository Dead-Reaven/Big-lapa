import React from 'react'
import Flex from '../../../../styles/Flex.styles'
import NovaPoshta from './img/Nova_Poshta.png'
import { StyledAdress } from './Donation.style'

function Adress() {
  return (
    <StyledAdress>
      <Flex justify="space-between" align="flex-start">
        <div>
          <p>Наше відділення для посилок:</p>
          <p>
            Відділення № 19, м. Кривий Ріг, Мусоргского 3<br /> Притулок для тварин “Біг
            Лапа”
          </p>
        </div>
        <img src={NovaPoshta} alt="nova poshta logo" />
      </Flex>
    </StyledAdress>
  )
}

export default Adress
