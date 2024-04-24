import { useDispatch, useSelector } from 'react-redux'
// import { usersSlice } from '../../store/reducers/userReducers'
import { selectUser } from '../../store/subscriptions/reduxSelectors'
import { loginUserThunk } from '../../store/reducers/userReducers'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch()
  const selector = useSelector(selectUser)
  const navigate = useNavigate();


  useEffect(() => {
      if(selector && selector.status) {
        navigate('/profil');
      }
  },[])


  const handleSubmit = (evt) => {
    evt.preventDefault()
    const email = evt.currentTarget.username.value
    const password = evt.currentTarget.password.value;
    dispatch(loginUserThunk({email, password}))
  }
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value="tony@stark.com"/>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value='password123'/>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  )
}

export default SignIn
