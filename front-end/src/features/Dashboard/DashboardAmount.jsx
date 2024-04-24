// import { usersSlice } from "../../store/reducers/userReducers"
import { useSelector } from "react-redux"
import { selectUser } from '../../store/subscriptions/reduxSelectors'
import { useDispatch } from "react-redux"
import { getProfileThunk } from "../../store/reducers/userReducers"
import { useEffect } from "react"



/* eslint-disable */
const DashboardAmount = ({ title, amount, description }) => {
  const dispatch = useDispatch()
  const selectToken = useSelector(selectUser)
  console.log(selectToken.body.token);
  useEffect(() => {
    dispatch(getProfileThunk(selectToken.body.token))
  },[selectToken])

  return (
    <>
      <h2 class="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </>
  )
}

export default DashboardAmount
