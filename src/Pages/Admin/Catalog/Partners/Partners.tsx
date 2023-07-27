import { useState } from 'react'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import {
  NoPartners,
  PartnersButton,
  PartnersItems,
  PartnersLogos,
  PartnersStyled,
} from './Partners.style'
import Modal from './components/Modal'
import { SadIco } from './img/icons'
import PartnersItem from './components/PartnersItem'

import partner1 from '../../../Home/Components/Partners/img/Purina-logo.png'
import partner2 from '../../../Home/Components/Partners/img/Royal-Canin-Logo.png'
import AddPartner from './components/AddPartner'

const DUMMY_PARTNERS = [
  {
    id: 1,
    src: partner1,
  },
  {
    id: 2,
    src: partner2,
  },
]

interface Partner {
  id: number
  src: string
}

function Partners() {
  const [partners, setPartners] = useState<Partner[]>(DUMMY_PARTNERS)
  const [id, setId] = useState(0)
  const [IsModalOpen, setIsModalOpen] = useState(false)

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const submitHandler = (id: number) => {
    setPartners((partners) => {
      return partners.filter((partner) => partner.id !== id)
    })
    setIsModalOpen((curr) => !curr)
  }

  return (
    <>
      <Modal
        title="Ви справді хочете видалити лого?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
        id={id}
      />
      <PartnersStyled>
        <PartnersLogos>
          <TitleH2>Лого партнерів</TitleH2>
          {partners.length === 0 && (
            <NoPartners>
              <TitleH3>На жаль, у притулку ще немає партнерів</TitleH3>
              <SadIco />
            </NoPartners>
          )}
          <PartnersItems>
            {partners.map((partner) => (
              <PartnersItem
                setIsModalOpen={setIsModalOpen}
                key={partner.id}
                partner={partner}
                setId={setId}
              />
            ))}
            <AddPartner setPartners={setPartners} />
          </PartnersItems>
        </PartnersLogos>
        {partners.length !== 0 && <PartnersButton>Додати лого</PartnersButton>}
      </PartnersStyled>
    </>
  )
}

export default Partners
