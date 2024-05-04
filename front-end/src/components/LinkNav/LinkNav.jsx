import { Link } from 'react-router-dom'

// eslint-disable-next-line
const LinkNav = ({ className, nextLink, onClick, children }) => {
      return (
        <Link className={className} to={nextLink} onClick={onClick}>
          {children}
        </Link>
      )
}

export default LinkNav