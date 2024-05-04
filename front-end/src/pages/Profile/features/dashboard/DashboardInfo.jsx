import { Button } from '../../../../components/routeComponents'
import { useDispatch, useSelector, selectState } from '../../../../redux'
import { handleClick } from '../../../utils/eventHandlers'

/* eslint-disable */
const DashboardInfo = () => {
  const dispatch = useDispatch()
  const getDatasUser = useSelector(selectState('getUserData'))

  return (
    <div className="header">
      <h2>
        Welcome back
        <br />
        {getDatasUser?.userName} {/* // get userName // */}
      </h2>
      {/* handleClick to open edit form, send true with dispatch (eventsReducer/ cancelEditForm) */}
      <Button
        className="edit-button"
        onClick={() => handleClick(false, dispatch)}>
        Edit Name
      </Button>
    </div>
  )
}

export default DashboardInfo
