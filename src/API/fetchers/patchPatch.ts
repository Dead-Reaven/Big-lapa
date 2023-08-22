import axios from 'axios'
import { changePassType } from '../types'

const token = localStorage.getItem('access_token')
const url = 'https://sore-tan-perch-tutu.cyclic.app/api/auth/change-password'
const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }

const usePatch = async (updateData: changePassType) => {
  await axios.patch(url, updateData, { headers }).then((res) => {
    console.log(res.data)
    return res.data
  })
}

export default usePatch
