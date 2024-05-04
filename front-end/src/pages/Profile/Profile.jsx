import { DashboardAmount, DashboardInfo } from './features/routeComponents'
import { selectState, useDispatch, useSelector, persistor } from '../../redux/index'
import { useEffect } from 'react'
import EditForm from './features/editForm/EditForm'


const Profile = () => {
  const dispatch = useDispatch()
  const cancelEdit = useSelector(selectState('cancelEditForm')) // verify state to show/close (DashboardInfo || edit Form) // 
  const getRemember = useSelector(selectState('getRemeberStatus'))
// get remember state, if true => when user reload/leave the website, remove all state (persistor.purge) //
  

useEffect(() => {
    if(getRemember) {
      window.addEventListener("beforeunload", function () {
        persistor.purge()
      });
    }
  },[dispatch, getRemember])

  return (
    <> {/* cancelEdit true or undefined => DashboardInfo */}
    {cancelEdit || cancelEdit === undefined ?
    <DashboardInfo />
    :
    <section className="sign-in-content">
      <EditForm />
    </section>
  }   {/* 3x section account */}
      <DashboardAmount
        description="Available Balance"
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
      />
      <DashboardAmount
        description="Available Balance"
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
      />
      <DashboardAmount
        description="Current Balance"
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
      />
    </>
  )
}

export default Profile
