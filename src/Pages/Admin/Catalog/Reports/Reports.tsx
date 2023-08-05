import { useState } from 'react'

import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import {
  AddPartnerStyled as AddReportStyled,
  NoPartners as NoReports,
  PartnersButton as ReportsButton,
  PartnersItems as ReportsItems,
  PartnersLogos as ReportsLogos,
  PartnersStyled as ReportsStyled,
} from '../Partners/Partners.style'
import Modal from '../Partners/components/Modal'
import { CloseIco, PlusIco } from '../Partners/img/icons'
import { ReactComponent as IcoReport } from './img/ReportIIco.svg'
import { ReportFileStyled } from './Report.styled'
import { ReportTypes } from '../../../../API/types'
import { useMutation, useQuery } from '@tanstack/react-query'
import getReportsId from '../../../../API/fetchers/getReportsID'
import getReportFile from '../../../../API/fetchers/getReportFile'

function Partners() {
  const [reportsState, setReportsState] = useState<ReportTypes[]>([])
  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useQuery({
    queryKey: ['reportsId'],
    initialData: [],
    queryFn: getReportsId,
    onSuccess: (data) => {
      const reports = data.map((id) => {
        return {
          id: id, // get ID from queryId
          name: '',
          src: null,
        }
      })
      //set reports
      setReportsState(reports)
      // fetch files
      fetchReportFile(reports)
    },
    refetchOnWindowFocus: false,
  })

  const getAllReports = (reports: ReportTypes[]) =>
    Promise.all(reports.map((report) => getReportFile(report.id)))

  const { mutate: fetchReportFile } = useMutation(getAllReports, {
    onSuccess: (data: any) => {
      console.log({ data })
      // setReportsState(data)
    },
  })

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const onDeleteReport = (modalId: string) => {
    // usePost('partners', modalId, 'delete')
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
      // usePost('partners', selectedFile)
      setSelectedFile(null)
    } else console.log('unexpected file type')
  }

  return (
    <form onSubmit={onPostReport} style={{ height: '100%' }}>
      <Modal
        title="Ви справді хочете видалити лого?"
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
            {reportsState.map((report) => (
              <ReportFileStyled key={report.id}>
                <IcoReport id="ico-report" />
                <p>
                  {report.name.length < 60
                    ? report.name
                    : report.name.slice(0, 60 - 3) + '... '}
                </p>
                <button type="button" onClick={() => openModal(report.id)}>
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
    </form>
  )
}

export default Partners
