import React from 'react'
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div>
    <div className=''>
        <FiMenu  className='w-12 h-12'/>
    </div>
         {/* Left Menu */}
         {/* Mid Logo */}
         <div className=''>
            <img src={logo}/>
         </div>
         {/* Right Authentification */}
    </div>
  )
}

export default Navbar