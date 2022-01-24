import useInput from '@/hooks/useInput'

const Input = ({name, placeholder, validations}) => {
  const {value, onChange, onBlur /*{isDirty, isEmpty, isValidInput}*/} = useInput({...validations})
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => {
        onChange(e)
      }}
      onBlur={(e) => {
        onBlur(e)
      }}
      placeholder={placeholder}
    ></input>
  )
}

export default Input
