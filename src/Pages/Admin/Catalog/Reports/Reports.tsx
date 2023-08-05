import { useState } from 'react'

import usePost from '../../../../API/usePost'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import {
  NoPartners as NoReports,
  PartnersButton as ReportsButton,
  PartnersItems as ReportsItems,
  PartnersLogos as ReportsLogos,
  PartnersStyled as ReportsStyled,
} from '../Partners/Partners.style'
import AddFile from '../Partners/components/AddPartner'
import Modal from '../Partners/components/Modal'
import ReportFile from '../Partners/components/PartnersItem'

function Partners() {
  const [reportsState, setReportsState] = useState<any[]>([])

  // const status = useGet({
  //   category: 'partners',
  //   state: partnersState,
  //   setState: setPartnersState,
  // }) as RequestStatusTypes

  // console.log({ status })
  // console.log({ partnersState })

  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const modalSubmitHandler = (modalId: string) => {
    usePost('partners', modalId, 'delete')
    setReportsState((partners) => partners?.filter(({ id }) => id !== modalId))
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
      <ReportsStyled>
        <ReportsLogos>
          <TitleH2>Звітність</TitleH2>

          <NoReports>
            {/* {status.pending && <TitleH3> Будь-ласка зачекайте...</TitleH3>}
            {partnersState.length === 0 && !status.pending && (
              <>
                <TitleH3>На жаль, у притулку ще немає партнерів</TitleH3>
                <SadIco />
              </>
            )} */}
          </NoReports>

          <ReportsItems>
            {reportsState?.map((partner) => (
              <ReportFile
                setIsModalOpen={setIsModalOpen}
                key={partner.id}
                partner={partner}
                setDeleteLogoId={setModalDeleteId}
              />
            ))}
            <AddFile
              selectedFile={selectedFile}
              setPartners={setReportsState}
              setSelectedFile={setSelectedFile}
            />
          </ReportsItems>
        </ReportsLogos>
        {/* <TitleH3>{status.reject && status.massage}</TitleH3> */}
        {selectedFile && <ReportsButton type="submit">Відправити</ReportsButton>}
      </ReportsStyled>
    </form>
  )
}

export default Partners
