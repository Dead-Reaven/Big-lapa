import axios from 'axios'
import domen from '../domen'
import { PartnerTypes } from '../types'

const getPartner = (id: string): Promise<PartnerTypes> =>
  axios.get(`${domen}/api/files/` + id, { responseType: 'arraybuffer' }).then((res) => {
    console.log('fetched partner img', { id })

    const data = new Uint8Array(res.data) // No need to spread the data into an array

    const base64 = btoa(data.reduce((data, byte) => data + String.fromCharCode(byte), ''))
    const base64Img = `data:image/png;base64, ${base64}`
    return {
      id: id,
      src: base64Img as string,
      encodedBase64: base64Img,
    }
  })

export default getPartner
