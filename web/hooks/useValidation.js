import {useState, useEffect} from 'react'

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true)
  const [isValidInput, setValidInput] = useState(false)

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true)
          break
      }
    }
  }, [value])

  useEffect(() => {
    if (isEmpty) {
      setValidInput(false)
    } else {
      setValidInput(true)
    }
  }, [isEmpty])

  return {isValidInput,isEmpty}
}
export default useValidation
