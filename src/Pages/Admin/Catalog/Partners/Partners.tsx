import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { PartnerTypes } from '../../../../API/types'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import {
  NoPartners,
  PartnersButton,
  PartnersItems,
  PartnersLogos,
  PartnersStyled,
} from './Partners.style'
import Modal from '../../Components/UI/Modal'
import { SadIco } from './img/icons'
import PartnersItem from './components/PartnersItem'
import AddPartner from './components/AddPartner'
import getPartnersId from '../../../../API/fetchers/getPartnersId'
import getPartner from '../../../../API/fetchers/getPartnerImg'
import postPartners from '../../../../API/fetchers/postPartners'
import Message from '../../Components/UI/Message'
import deletePartner from '../../../../API/fetchers/deletePartner'

function Partners() {
  const [partnersState, setPartnersState] = useState<PartnerTypes[]>([])
  const [selectedId, setModalDeleteId] = useState<string>('')
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const { data: idPartners, refetch: refetchGetPartners } = useQuery({
    queryKey: ['partnersId'],
    initialData: [],
    queryFn: getPartnersId,
    onSuccess: (data) => mutatePartnersIMG(data),
    refetchOnWindowFocus: false,
  })

  // New mutation function to fetch partner data for each ID in partnersID array
  const fetchPartnersIMG = (partnersIds: string[]) => {
    return Promise.all(partnersIds.map((id) => getPartner(id)))
  }

  // Use the useMutation hook to handle the data fetching and state update
  const {
    mutate: mutatePartnersIMG,
    isLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  } = useMutation(fetchPartnersIMG, {
    onSuccess: (data) => setPartnersState(data),
  })

  const {
    mutate: postSelectedFile,
    isSuccess: isPostSuccess,
    isError: isPostError,
  } = useMutation(postPartners, {
    onSuccess: () => refetchGetPartners(),
  })

  const {
    mutate: deleteSelectedPartner,
    isSuccess: isDeleteSuccess,
    isError: isDeleteError,
  } = useMutation(deletePartner, {
    onSuccess: () => {
      refetchGetPartners()
    },
  })

  const cancelHandler = () => {
    setIsModalOpen((curr) => !curr)
  }

  const onDeleteLogo = (modalId: string) => {
    if (idPartners.find((id) => id === modalId)) {
      deleteSelectedPartner(modalId)
    }
    setPartnersState((partners) => partners?.filter(({ id }) => id !== modalId))
    setIsModalOpen((curr) => !curr)
    setSelectedFile(null)
  }
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedFile instanceof File) {
      postSelectedFile(selectedFile)
      setSelectedFile(null)
    } else console.log('unexpected file type')
  }

  return (
    <form onSubmit={onSubmitForm} style={{ height: '100%' }}>
      <Modal
        title="Ви справді хочете видалити лого?"
        body="Повернути дію буде неможливо"
        isOpen={IsModalOpen}
        onCancel={cancelHandler}
        onSubmit={onDeleteLogo}
        id={selectedId}
      />
      <PartnersStyled>
        <PartnersLogos>
          <TitleH2>Лого партнерів</TitleH2>
          <NoPartners>
            {isLoading && <TitleH3>Будь ласка зачекайте ⌛</TitleH3>}
            {isGetSuccess && partnersState.length === 0 && (
              <>
                <TitleH3>Схоже, у притулку поки що немає партнерів</TitleH3>
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
        {selectedFile && <PartnersButton type="submit">Відправити</PartnersButton>}
      </PartnersStyled>

      {isGetError && <Message mode="red">Схоже, сталася помилка ⛔</Message>}
      {isPostSuccess && <Message mode="green">Лого успішно завантажилось! ✔️</Message>}
      {isPostError && (
        <Message mode="red" delay={250000}>
          <div>
            Схоже, не вдалося завантажити файл <br />
            Можливо формат файлу не підходить чи файл занадто великий
          </div>
          <SadIco />
        </Message>
      )}
      {isDeleteSuccess && <Message mode="green">Партнер успішно видалився! ✔️</Message>}
      {isDeleteError && (
        <Message mode="red">Не вдалося видалити вказаний файл ⛔</Message>
      )}
    </form>
  )
}

export default Partners
