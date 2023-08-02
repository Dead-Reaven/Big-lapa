import { PartnerTypes } from '../types'

const getPartner = async (id: string): Promise<PartnerTypes> => {
  console.log('fetched partner img', { id })
  const response = await fetch(
    `https://big-lapa-api-production.up.railway.app/api/images/${id}`,
  )

  if (!response.ok) {
    throw new Error('Network response was not ok: fetchImage failed')
  }

  const data = await response.arrayBuffer()
  const base64 = btoa(
    new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), ''),
  )
  const base64Img = `data:image/png;base64, ${base64}`
  return {
    id: id,
    src: base64Img as string,
    encodedBase64: base64Img,
  }
}

export default getPartner
