import { selectState, useDispatch, useSelector } from '../../../../redux/index'
import { handleClick, handleSubmitEdit } from '../../../utils/eventHandlers'
import { Button, FieldGroup } from '../../../../components/routeComponents'

const EditForm = () => {
  const dispatch = useDispatch()
  const getUserAuth = useSelector(selectState('getUserAuth')) // get token to send with userName modification //
  const getDatasUser = useSelector(selectState('getUserData')) // get userName | firstName | lastName //

  return (
    <form
      onSubmit={(evt) =>
        handleSubmitEdit(
          evt,
          dispatch,
          getUserAuth,
          handleClick(true, dispatch)
        )
      }>
      <h1>Edit user info</h1>
      <FieldGroup // input required | defaultValue = actual userName //
        className="input-wrapper"
        label="User name"
        id="username"
        defaultValue={getDatasUser?.userName}
        required
      />
      <FieldGroup // input disabled //
        className="input-wrapper"
        label="First name"
        id="firstname"
        placeholder={getDatasUser?.firstName}
        disabled
      />
      <FieldGroup // input disabled //
        className="input-wrapper"
        label="Last name"
        id="lastname"
        placeholder={getDatasUser?.lastName}
        disabled
      />
      <div className="input-wrapper-btn">
        <Button className="sign-in-button">Save</Button>
        <Button
          className="sign-in-button"
          type="button"
          onClick={() => handleClick(true, dispatch)}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default EditForm
