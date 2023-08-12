import { useState } from 'react'

import TitleH2 from '../../../../Components/UI/TitleH2.styles'
// import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import { useMutation, useQuery } from '@tanstack/react-query'
import { ReportTypes } from '../../../../API/types'
import {
  AddPartnerStyled as AddReportStyled,
  // NoPartners as NoReports,
  PartnersButton as ReportsButton,
  PartnersItems as ReportsItems,
  PartnersLogos as ReportsLogos,
  PartnersStyled as ReportsStyled,
} from '../Partners/Partners.style'
import Modal from '../Partners/components/Modal'
import { CloseIco, PlusIco } from '../Partners/img/icons'
import { ReportFileStyled } from './Report.styled'
import { ReactComponent as IcoReport } from './img/ReportIIco.svg'
// import getReportFile from '../../../../API/fetchers/getReportFile'
import deleteReport from '../../../../API/fetchers/deleteReport'
import getReportAll from '../../../../API/fetchers/getReportAll'
import postReport from '../../../../API/fetchers/postReport'
import Message from '../../Components/UI/Message'

const url = 'https://sore-tan-perch-tutu.cyclic.app/api/files/document/'

function Partners() {
  const [reportsState, setReportsState] = useState<ReportTypes[]>([])
  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { isError: isErrorLoadReports, isLoading: isLoadingReports } = useQuery({
    queryKey: ['reportsId'],
    initialData: [],
    queryFn: getReportAll,
    onSuccess: (data) => {
      const reports = data.map((document) => {
        // getReportFile(id)
        return {
          id: document.Url, // get ID from queryId
          name: document.name,
          src: null,
        }
      })
      setReportsState(reports)
    },
    refetchOnWindowFocus: false,
  })

  const {
    mutate: mutatePostReport,
    isError: isErrorPost,
    isSuccess: isSuccessPost,
  } = useMutation(postReport, {
    onError: (error) => {
      console.log(error)
    },
  })

  const {
    mutate: mutateDeleteReport,
    isError: isErrorDeleteReport,
    isSuccess: isSuccessDeleteReport,
  } = useMutation(deleteReport)

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const onDeleteReport = (modalId: string) => {
    mutateDeleteReport(selectedId)
    setReportsState((partners) => partners?.filter(({ id }) => id !== modalId))
    setIsModalOpen((curr) => !curr)
    setSelectedFile(null)
  }

  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      console.log(selectedFile?.name)
      const newReport: ReportTypes = {
        id: Date.now().toString(),
        name: selectedFile.name,
        src: selectedFile,
      }
      setSelectedFile(selectedFile)
      setReportsState((files) => [...files, newReport])
    }
  }

  const openModal = (id: string) => {
    setIsModalOpen(true)
    setModalDeleteId(id)
  }

  const onPostReport = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedFile instanceof File) {
      console.log('Posted', selectedFile)
      mutatePostReport(selectedFile)
      setSelectedFile(null)
    } else console.log('unexpected file type')
  }

  return (
    <form onSubmit={onPostReport} style={{ height: '100%' }}>
      <Modal
        title="Ви справді хочете видалити звіт?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={cancelHandler}
        onSubmit={onDeleteReport}
        logoId={selectedId}
      />
      <ReportsStyled>
        <ReportsLogos>
          <TitleH2>Звітність</TitleH2>
          <ReportsItems>
            {reportsState.map(({ id, name }) => (
              <ReportFileStyled key={id}>
                <a href={url + id}>
                  <IcoReport id="ico-report" />
                  <p>{name.length < 60 ? name : name.slice(0, 60 - 3) + '... '}</p>
                </a>
                <button type="button" onClick={() => openModal(id)}>
                  <CloseIco />
                </button>
              </ReportFileStyled>
            ))}
          </ReportsItems>
          {!selectedFile && (
            <AddReportStyled>
              <input
                type="file"
                name="partner"
                id="partner"
                onChange={fileChangeHandler}
              />
              <label htmlFor="partner">
                <PlusIco />
                <p>Додати звіт</p>
              </label>
            </AddReportStyled>
          )}
        </ReportsLogos>
        {selectedFile && <ReportsButton type="submit">Відправити</ReportsButton>}
      </ReportsStyled>

      {isLoadingReports && <Message mode="green">Будь ласка зачекайте ⌛</Message>}
      {isErrorLoadReports && <Message mode="red">Схоже, сталася помилка ⛔</Message>}
      {isSuccessPost && <Message mode="green">Звіт успішно завантажився! ✔️</Message>}
      {isErrorPost && (
        <Message mode="red" delay={250000}>
          <div>
            Схоже, не вдалося завантажити файл ⛔ <br />
            Можливо формат файлу не підходить чи файл занадто великий
          </div>
        </Message>
      )}
      {isSuccessDeleteReport && <Message mode="green">Звіт успішно видалився ✔️</Message>}
      {isErrorDeleteReport && (
        <Message mode="red"> Не вдалося видалити вказаний звіт ⛔</Message>
      )}
    </form>
  )
}

export default Partners
