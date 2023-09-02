import axios from 'axios'
import domen from '../domen'
import { IAdminChangePass } from '../types'

const token = localStorage.getItem('access_token')
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }

const usePatch = async (updateData: IAdminChangePass) => {
  await axios
    .patch(`${domen}/api/auth/change-password`, updateData, { headers })
    .then((res) => {
      console.log(res.data)
      return res.data
    })
}

export default usePatch
