import './navbar.css'
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, StarIcon, CodeBracketSquareIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Navbar() {
  const [menu, setMenu] = useState(false) 
  function handleClick(e) {
    console.log("clicked")
    setMenu(prev => !prev)
  }
    return (
        <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">Sangram Kishor</a>         
          <button className='menu-btn' onClick={() => handleClick()}>
            {menu ? 
            <XMarkIcon className='bars-icon' /> :
            <Bars3Icon className='bars-icon' /> } 
            </button> 
            <div className={`navbar-nav ${menu ? "show" : ""}`}>
              <a className="nav-link active" href="#">
              <HomeIcon className='nav-icon'/> Home
              </a>
              <a className="nav-link" href="#about">
                <UserIcon className='nav-icon' /> About
              </a>
              <a className="nav-link" href="#skills">
                <StarIcon className='nav-icon' /> Skills
              </a>
              <a className="nav-link" href="#works">
                <CodeBracketSquareIcon className='nav-icon' /> Works
              </a>
              <a className="nav-link" href="#contact">
                <AtSymbolIcon className='nav-icon' /> Contact
              </a>
            </div> 
                    
        </div>
      </nav>
    )
}