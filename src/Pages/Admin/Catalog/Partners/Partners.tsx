import { useState } from 'react'
import TitleH2 from '../../../../Components/UI/TitleH2.styles'
import TitleH3 from '../../../../Components/UI/TitleH3.styles'
import {
  AddPartner,
  NoPartners,
  PartnersButton,
  PartnersItem,
  PartnersItems,
  PartnersLogos,
  PartnersStyled,
} from './Partners.style'
import Modal from './components/Modal'
import { CloseIco, PlusIco, SadIco } from './img/icons'

function Partners() {
  const [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const cancelHandler = () => {
    setIsOpen((curr) => !curr)
  }

  const submitHandler = () => {
    console.log('submited')
    setIsOpen((curr) => !curr)
  }

  return (
    <>
      <Modal
        title="Ви справді хочете видалити лого?"
        body="Повернути дію буде неможливо"
        isOpen={isOpen}
        onCancel={cancelHandler}
        onSubmit={submitHandler}
      ></Modal>
      <PartnersStyled>
        <PartnersLogos>
          <TitleH2>Лого партнерів</TitleH2>
          <NoPartners>
            <TitleH3>На жаль, у притулку ще немає партнерів</TitleH3>
            <SadIco />
          </NoPartners>
          <PartnersItems>
            <PartnersItem>
              <button>
                <CloseIco />
              </button>
            </PartnersItem>
            <PartnersItem>
              <button>
                <CloseIco />
              </button>
            </PartnersItem>
            <AddPartner>
              <input type="file" name="partner" id="partner" />
              <label htmlFor="partner">
                <PlusIco />
                <p>Додати лого</p>
              </label>
            </AddPartner>
          </PartnersItems>
        </PartnersLogos>
        {/* <button onClick={openModal}>show modal</button> */}
        <PartnersButton onClick={openModal}>Додати лого</PartnersButton>
      </PartnersStyled>
    </>
  )
}

export default Partners
