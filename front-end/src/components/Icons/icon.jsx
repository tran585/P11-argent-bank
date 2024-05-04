import security from '../../assets/icons/icon-security.png'
import chat from '../../assets/icons/icon-chat.png'
import money from '../../assets/icons/icon-money.png'
import argentBankLogo from '../../assets/logo/argentBankLogo.png'


// eslint-disable-next-line
const Icon = ({className, alt, typeIcon}) => {
    let icon
    switch(typeIcon) {
        case 'security':
            icon = security
                break
        case 'chat':
            icon = chat
                break
        case 'money':
            icon = money
                break
        case 'logo':
            icon = argentBankLogo
                break
        case 'circle':
            return (
                <i className="fa fa-user-circle"></i>
            )
        case 'signOut':
            return (
                <i className="fa fa-sign-out"></i>
            )
    }
    return (
        <img className={className} alt={alt} src={icon}/>
    )
}


export default Icon