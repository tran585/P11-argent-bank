import { selectState, useDispatch, useSelector } from '../../redux/index'
import { FieldGroup, Button, Icon } from '../../components/routeComponents'
import { handleSubmitLogin } from '../utils/eventHandlers'

const Login = () => {
  const dispatch = useDispatch()
  const statusError = useSelector(selectState('getError')) // return error with status & message //

  return (
    <section className="sign-in-content">
      <Icon typeIcon="circle" />
      <h1>Sign In</h1>
      <form onSubmit={(evt) => handleSubmitLogin(evt, dispatch)}>
        <FieldGroup
          className="input-wrapper"
          type="email"
          label="Username"
          id="username"
          required
        />
        <FieldGroup
          className="input-wrapper"
          label="Password"
          id="password"
          type="password"
          required
        />{' '}
        {/* show error form if email or password is false | also in console by axios */}
        {statusError?.status === 400 && statusError?.message ? (
          <span style={{ color: 'red' }}>
            your email or password is incorrect
          </span>
        ) : null}
        <FieldGroup
          className="input-remember"
          label="Remember me"
          id="remember"
          type="checkbox"
        />
        <Button className="sign-in-button">Sign In</Button>
      </form>
    </section>
  )
}

export default Login
