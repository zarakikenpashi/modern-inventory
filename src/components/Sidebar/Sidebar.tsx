import logo from '../../assets/logo.svg'
import Navigation from './Navigation'

const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100  w-full">
        <a href="#" className='flex justify-center items-center p-1'>
            <img src={logo} alt="LOGO"  className='w-40' />
        </a>
         <Navigation />
    </aside>
  )
}

export default Sidebar