import BankingFeatures from "../../features/Home/BankingFeatures"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { selectUser } from "../../store/subscriptions/reduxSelectors"


const Home = () => {
  const selector = useSelector(selectUser)

  useEffect(() => {
    console.log(selector)
  },[selector])
  return (
    <>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <BankingFeatures />
    </>
  )
}

export default Home
