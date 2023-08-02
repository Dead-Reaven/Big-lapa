import { useEffect, useState } from 'react'
import { PartnerTypes, RequestStatusTypes } from '../../../../API/types'
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
  const [partnersState, setPartnersState] = useState<PartnerTypes[]>([])

  const status = useGet({
    category: 'partners',
    state: partnersState,
    setState: setPartnersState,
  }) as RequestStatusTypes
  console.log({ status })
  console.log({ partnersState })

  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const modalSubmitHandler = (modalId: string) => {
    usePost('partners', modalId, 'delete')
    setPartnersState((partners) => partners?.filter(({ id }) => id !== modalId))
    setIsModalOpen((curr) => !curr)
    setSelectedFile(null)
  }

  const onSubmitFormHandler = () => {
    if (selectedFile instanceof File) {
      usePost('partners', selectedFile)
      setSelectedFile(null)
    } else console.log('unexpected file type')
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

          <NoPartners>
            {status.pending && <TitleH3> Будь-ласка зачекайте...</TitleH3>}
            {partnersState.length === 0 && !status.pending && (
              <>
                <TitleH3>На жаль, у притулку ще немає партнерів</TitleH3>
                <SadIco />
              </>
            )}
          </NoPartners>

          <PartnersItems>
            {partnersState?.map((partner) => (
              <PartnersItem
                setIsModalOpen={setIsModalOpen}
                key={partner.id}
                partner={partner}
                setDeleteLogoId={setModalDeleteId}
              />
            ))}
            <AddPartner
              selectedFile={selectedFile}
              setPartners={setPartnersState}
              setSelectedFile={setSelectedFile}
            />
          </PartnersItems>
        </PartnersLogos>
        <TitleH3>{status.reject && status.massage}</TitleH3>
        {selectedFile && <PartnersButton type="submit">Відправити</PartnersButton>}
      </PartnersStyled>
    </form>
  )
}

export default Partners
