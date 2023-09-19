import { PartnerTypes } from '../../../../../API/types'
import { PartnersItemStyled } from '../Partners.style'
import { CloseIco } from '../img/icons'

interface PartnerItem {
  partner: PartnerTypes
  setDeleteLogoId: React.Dispatch<React.SetStateAction<string>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function PartnersItem({ setIsModalOpen, partner, setDeleteLogoId }: PartnerItem) {
  const openModal = () => {
    setIsModalOpen(true)
    setDeleteLogoId(partner.id)
  }

  return (
    <PartnersItemStyled>
      <button type="button" onClick={openModal}>
        <CloseIco />
      </button>
      <img src={partner?.encodedBase64 ?? (partner.src as string)} alt="partner" />
    </PartnersItemStyled>
  )
}

export default PartnersItem
