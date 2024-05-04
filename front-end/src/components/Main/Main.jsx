import { useLocation } from "react-router-dom"


// eslint-disable-next-line
const Main = ({children}) => {
    let location = useLocation()
    return (
        <main className={location.pathname === '/' ? 'main' : 'main bg-dark'}>
            {children}
        </main>
    )
}

export default Main