import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignIn from '../pages/SignIn'
import UserPage from '../pages/User'

const RoutesApp = () => {
  let location = useLocation()
  return (
    <>
      <Header />
      <main className={location.pathname === "/" ? 'main' : 'main bg-dark'}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path='/profil' element={<UserPage/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default RoutesApp
