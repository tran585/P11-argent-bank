import argentBankLogo from '../../assets/logo/argentBankLogo.png'
import './style.css'
import { Link } from 'react-router-dom'




const Header = () => {

    return (
        <nav className='main-nav'>
            <a className='main-nav-logo' href='.'>
                <img 
                className='main-nav-logo-image' 
                src={argentBankLogo} 
                alt='Argent Bank Logo'/>
                <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
                <Link className="main-nav-item" to={'sign-in'}>
                    <i className="fa fa-user-circle"></i>{" "}
                    Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Header