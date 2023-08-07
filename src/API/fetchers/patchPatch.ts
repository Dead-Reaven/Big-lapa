import axios from 'axios'
import { changePassType } from '../types'

const token = localStorage.getItem('access_token')
const url = 'https://big-lapa-api-production.up.railway.app/api/auth/change-password'
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }

const usePatch = async (updateData: changePassType) => {
  const response = await axios
    .patch(url, updateData, { headers })
    .catch((error) => updateData.setIsError(error.message))
  if (response) {
    console.log(response.data)
  }
}

export default usePatch
