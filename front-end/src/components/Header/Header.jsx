import { selectState, useSelector, userReducer, eventsReducer, useDispatch } from '../../redux'
import LinkNav from '../LinkNav/LinkNav'
import Icon from '../Icons/icon'

const Header = () => {
  const getDatasUser = useSelector(selectState('getUserData')) // get firstName to indicate for users //
  const dispatch = useDispatch()

  const handleLogoutUser = () => { // to disconnect when user click btn sign out //
    dispatch(userReducer.actions.logoutUser()) // remove all datas from slice userReducer //
    dispatch(eventsReducer.actions.cancelEditForm({})) // remove state cancelEditForm //
  }
  return (
    <nav className="main-nav">
      <LinkNav nextLink={'/'} className='main-nav-logo'>
        <Icon typeIcon='logo' className='main-nav-logo-image' alt='Argent Bank Logo'/>
        <h1 className="sr-only">Argent Bank</h1>
      </LinkNav>
      <div>
        {getDatasUser ? ( // depending datasUser state, show nav connected || disconnect //
          <>
            <LinkNav
              className={'main-nav-item'}
              nextLink={'/profile'}
            ><Icon typeIcon='circle'/> {getDatasUser.userName}</LinkNav>
            <LinkNav
              className={'main-nav-item'}
              nextLink={'/'}
              onClick={handleLogoutUser}
            ><Icon typeIcon='signOut'/> Sign Out</LinkNav>
          </>
        ) : (
          <LinkNav
            className={'main-nav-item'}
            nextLink={'/login'}
          ><Icon typeIcon='circle'/> Sign In</LinkNav>
        )}
      </div>
    </nav>
  )
}

export default Header
