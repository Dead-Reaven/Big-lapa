import { AddPartnerStyled } from '../Partners.style'
import { PlusIco } from '../img/icons'

interface Partner {
  id: number
  src: string
}

interface AddPartnerProps {
  setPartners: React.Dispatch<React.SetStateAction<Array<Partner>>>
}

function AddPartner({ setPartners }: AddPartnerProps) {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile)

      const newPartner: Partner = {
        id: Date.now(),
        src: fileUrl,
      }

      setPartners((partners) => [...partners, newPartner])

      e.target.value = ''
    }
  }

  return (
    <AddPartnerStyled>
      <input type="file" name="partner" id="partner" onChange={fileChangeHandler} />
      <label htmlFor="partner">
        <PlusIco />
        <p>Додати лого</p>
      </label>
    </AddPartnerStyled>
  )
}

export default AddPartner
