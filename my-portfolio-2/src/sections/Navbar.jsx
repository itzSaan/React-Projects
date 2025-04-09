import './navbar.css'
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, StarIcon, BriefcaseIcon , UserPlusIcon  } from '@heroicons/react/24/solid'
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
          <a className="navbar-brand" href="#">
            {/* <h2>Sangram Kishor</h2> */}
            <img src="images/sk1.svg" width={54} alt="SK" />  
          </a>         
          <button className='menu-btn' onClick={() => handleClick()}>
            {menu ? 
            <XMarkIcon className='bars-icon' /> :
            <Bars3Icon className='bars-icon' /> } 
            </button> 
            <div className={`navbar-nav ${menu ? "show" : ""}`}>
              <a className="nav-link active" href="#">
              <HomeIcon id='home' className='nav-icon'/> <span>Home</span>
              </a>
              <a className="nav-link" href="#about">
                <UserIcon className='nav-icon' /> <span>About</span>
              </a>
              <a className="nav-link" href="#skills">
                <StarIcon className='nav-icon' /> <span>Skills</span>
              </a>
              <a className="nav-link" href="#works">
                <BriefcaseIcon  className='nav-icon' /> <span>Works</span>
              </a>
              <a className="nav-link" href="#contact">
                <UserPlusIcon  className='nav-icon' /> <span>Contact</span>
              </a>
            </div> 
                    
        </div>
      </nav>
    )
}