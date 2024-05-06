import { editUserName, eventsReducer, fetchUserData } from '../../redux/index'

// send userName value on submit event (save) //
export const handleSubmitEdit = (evt, dispatch, getUserAuth) => {
  evt.preventDefault()
  const valueInput = { userName: evt.currentTarget.username.value }
  dispatch(editUserName({ value: valueInput, token: getUserAuth })) // use thunk //
}

// close the form or open on click event (editName/save/cancel) //
export const handleClick = (value, dispatch) => {
  dispatch(eventsReducer.actions.cancelEditForm(value))
}
// event to login user + if remember checked or not => send state //
export const handleSubmitLogin = (evt, dispatch) => {
  evt.preventDefault()
  const valueForm = {
    email: evt.currentTarget.username.value,
    password: evt.currentTarget.password.value,
  }
  if (evt.currentTarget.remember.checked) {
    dispatch(eventsReducer.actions.rememberActivated(true))
  } else if (!evt.currentTarget.remember.checked) {
    dispatch(eventsReducer.actions.rememberActivated(false))
  }
  dispatch(fetchUserData(valueForm)) // use thunk //
}