import { PartnerTypes } from '../../../../../API/types/types'
import { AddPartnerStyled } from '../Partners.style'
import { PlusIco } from '../img/icons'

interface AddPartnerProps {
  selectedFile: File | null
  setPartners: React.Dispatch<React.SetStateAction<PartnerTypes[]>>
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
}

function AddPartner({ selectedFile, setPartners, setSelectedFile }: AddPartnerProps) {
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
        setSelectedFile(selectedFile)
        setPartners((partners) => [...(partners as PartnerTypes[]), newPartner])
      }
      reader.readAsDataURL(selectedFile)
      e.target.value = ''
    }
    setSelectedFile(null)
  }

  if (!selectedFile)
    return (
      <AddPartnerStyled>
        <input
          type="file"
          accept="image/*"
          name="partner"
          id="partner"
          onChange={fileChangeHandler}
        />
        <label htmlFor="partner">
          <PlusIco />
          <p>Додати лого</p>
        </label>
      </AddPartnerStyled>
    )
  return <></>
}

export default AddPartner
