import { useEffect, useState } from 'react'
import { IValidation } from '../../API/types'

const useValidForm = (props: IValidation) => {
  const { value, validations } = props
  const [isEmpty, setIsEmpty] = useState(true)
  const [minLengthError, setMinLengthError] = useState(false)
  const [maxLengthError, setMaxLengthError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false)
          break
        case 'maxLength':
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false)
          break
        case 'isEmailErr':
        default:
          {
            const re =
              /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            re.test(String(value).toLowerCase())
              ? setEmailError(false)
              : setEmailError(true)
          }
          break
      }
    }
  }, [value])
  useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError || emailError) {
      setInputDisabled(false)
    } else setInputDisabled(true)
  }, [isEmpty, minLengthError, maxLengthError, emailError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    inputDisabled,
    emailError,
  }
}

export default useValidForm
