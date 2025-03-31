import React from 'react'
import Logo from './Logo'
import { Github } from 'lucide-react'

const Header = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md shadow-lg text-white py-3 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-bold">ENHANCE</span>
        </div>

        {/* Right: Navigation Links */}
        <ul className="md:flex space-x-6">
          <a href='' target='_blank'><button  className='px-3 py-1 bg-black flex items-center gap-2 border rounded-md cursor-pointer'><Github size={16}/>Github</button></a>
        </ul>

        {/* Mobile Menu Placeholder (optional) */}
        {/* <button className="md:hidden text-2xl">☰</button> */}
      </div>
    </nav>
  )
}

export default Header
