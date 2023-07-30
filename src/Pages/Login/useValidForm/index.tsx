import { useEffect, useState } from 'react'

interface Props {
  value: any
  validations: any
}

const useValidForm = (props: Props) => {
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
