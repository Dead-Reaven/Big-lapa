import { useEffect, useState } from 'react'
import { PartnerTypes } from '../../../../API/types'
import useGet from '../../../../API/useGet'

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
import AddPartner from './components/AddPartner'
import usePost from '../../../../API/usePost'

function Partners() {
  const fetchedPartners = useGet('partners') as PartnerTypes[] | null
  useEffect(() => {
    if (fetchedPartners) setPartners(fetchedPartners)
  }, [fetchedPartners])

  const [partners, setPartners] = useState<PartnerTypes[]>([])
  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  console.log(partners)

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const modalSubmitHandler = (modalId: string) => {
    setPartners((partners) => {
      return partners?.filter(({ id }) => id !== modalId)
    })
    setIsModalOpen((curr) => !curr)
  }

  const onSubmitFormHandler = () => {
    usePost('partners', partners[partners.length - 1].src as File)
  }

  return (
    <form onSubmit={onSubmitFormHandler}>
      <Modal
        title="Ви справді хочете видалити лого?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={cancelHandler}
        onSubmit={modalSubmitHandler}
        logoId={selectedId}
      />
      <PartnersStyled>
        <PartnersLogos>
          <TitleH2>Лого партнерів</TitleH2>
          {partners?.length === 0 && (
            <NoPartners>
              <TitleH3>На жаль, у притулку ще немає партнерів</TitleH3>
              <SadIco />
            </NoPartners>
          )}
          <PartnersItems>
            {partners?.map((partner) => (
              <PartnersItem
                setIsModalOpen={setIsModalOpen}
                key={partner.id}
                partner={partner}
                setDeleteLogoId={setModalDeleteId}
              />
            ))}
            <AddPartner setPartners={setPartners} />
          </PartnersItems>
        </PartnersLogos>
        <PartnersButton type="submit">Оновити</PartnersButton>
      </PartnersStyled>
    </form>
  )
}

export default Partners
