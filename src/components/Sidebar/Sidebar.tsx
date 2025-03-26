import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100  w-full">
        <Link to="/dashboard" className='flex justify-center items-center p-1'>
            <img src={logo} alt="LOGO"  className='w-40' />
        </Link>
         <Navigation />
    </aside>
  )
}

export default Sidebar