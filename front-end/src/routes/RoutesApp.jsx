import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, Main } from '../components/routeComponents'
import { MainPage, Login, Profile, Error } from '../pages'
import { useSelector, selectState } from '../redux/index'

const RoutesApp = () => {
  const getUserAuth = useSelector(selectState('getUserAuth')) // to get state about user is logged in or not //

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route
            path="/login"
            element={ // if user is connected by form login page => redirect to profile page || replace url || cannot get page if connected //
              !getUserAuth ? <Login /> : <Navigate to="/profile" replace />
            }
          />
          <Route
            path="/profile" // If user is disconnect => redirection MainPage || replace url || cannot get page if not connected //
            element={getUserAuth ? <Profile /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<Error />} /> {/* catch all errors incorrect route url */}
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default RoutesApp
