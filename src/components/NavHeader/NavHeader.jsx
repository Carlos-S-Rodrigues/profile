import React from 'react'
import './style.css'


const NavHeader = () => {
  return (
    <nav>
      <div className="logo" ><a href=""><strong>Carlos</strong><span > Rodrigues</span></a></div>
      <ul>
        <li><a href="#" >About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavHeader