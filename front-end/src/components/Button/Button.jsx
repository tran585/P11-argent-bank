
// eslint-disable-next-line
const Button = ({ onClick, type, children, className }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button