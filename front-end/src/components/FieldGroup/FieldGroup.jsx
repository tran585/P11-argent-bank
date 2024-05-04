


// eslint-disable-next-line
const FieldGroup = ({ type = 'text', label, id, className, disabled, placeholder, defaultValue, required }) => {
  return ( // return complet container of input + label //
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} disabled={disabled} placeholder={placeholder} defaultValue={defaultValue} required={required}/>
    </div>
  )
}
export default FieldGroup
