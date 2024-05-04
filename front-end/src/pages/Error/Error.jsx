import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section-error">
      <h1>404</h1>
      <p>Sorry, the page not found</p>
      <p>The link you followed probably broken or the page has been removed.</p>
      <Link to={'/'}>Back to Home page</Link>
    </section>
  )
}

export default Error
