const Input = ({label, type, name, value, onChange}) => {

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input