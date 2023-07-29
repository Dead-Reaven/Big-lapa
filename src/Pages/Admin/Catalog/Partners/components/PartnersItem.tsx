import { PartnersItemStyled } from '../Partners.style'
import { CloseIco } from '../img/icons'

interface Partner {
  id: number
  src: string
}

interface PartnerItem {
  partner: Partner
  setId: React.Dispatch<React.SetStateAction<number>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function PartnersItem({ setIsModalOpen, partner, setId }: PartnerItem) {
  const openModal = () => {
    setIsModalOpen(true)
    setId(partner.id)
  }

  return (
    <PartnersItemStyled>
      <button onClick={openModal}>
        <CloseIco />
      </button>
      <img src={partner.src} alt="partner" />
    </PartnersItemStyled>
  )
}

export default PartnersItem
