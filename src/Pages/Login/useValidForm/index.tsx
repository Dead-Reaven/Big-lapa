import { useEffect, useState } from 'react'
import { ValidationsType } from '../../../API/types'

const useValidForm = (props: ValidationsType) => {
  const { value, validations } = props
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
      }
    }
  }, [value])

  return {
    isEmpty,
    minLengthError,
  }
}

export default useValidForm
