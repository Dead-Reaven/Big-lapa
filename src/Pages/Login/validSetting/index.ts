import { useState } from 'react'
import useValidForm from '../../useValidForm'

export const validationHook = (initialState: string, validations: any) => {
  const [value, setStateUser] = useState(initialState)
  const [isDirty, setIsDirty] = useState(true)
  const valid = useValidForm({ value, validations })

  const onChange = (newValue: string) => {
    setStateUser(newValue)
  }

  const handleClear = (e: any) => {
    e.preventDefault()
    setStateUser('')
  }

  const onBlur = () => {
    setIsDirty(true)
  }

  return {
    value,
    isDirty,
    onChange,
    handleClear,
    onBlur,
    ...valid,
  }
}
