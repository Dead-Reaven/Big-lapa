import { AddPartnerStyled } from '../Partners.style'
import { PlusIco } from '../img/icons'
import { PartnerTypes } from '../../../../../API/types'

interface AddPartnerProps {
  setPartners: React.Dispatch<React.SetStateAction<PartnerTypes[]>>
}

function AddPartner({ setPartners }: AddPartnerProps) {
  const fileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = function (event) {
        const base64String = event.target?.result
        const newPartner: PartnerTypes = {
          id: Date.now().toString(),
          src: selectedFile,
          encodedBase64: base64String as string,
        }
        setPartners((partners) => [...(partners as PartnerTypes[]), newPartner])
      }
      reader.readAsDataURL(selectedFile)

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
