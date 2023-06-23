import React from 'react'
import Flex from '../../../../styles/Flex.styles'
import NovaPoshta from '../../../../assets/img/Nova_Poshta.png'

interface Props {
  className?: string
}

function Adress({ className }: Props) {
  return (
    <div className={className}>
      <Flex justify="space-between" align="flex-start">
        <div>
          <p>Наше відділення для посилок:</p>
          <p>
            Відділення № 19, м. Кривий Ріг, Мусоргского 3 Притулок для тварин “Біг Лапа”
          </p>
        </div>
        <img src={NovaPoshta} alt="nova poshta logo"></img>
      </Flex>
    </div>
  )
}

export default Adress
