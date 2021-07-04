import React, { useRef } from 'react'
import './navbar.css'
import img1 from './images/person.png'
import img2 from './images/settings.png'
import img3 from './images/book.png'
// import ic from './images/iconxyz.png'

function Navbar () {

   

    return (
        <div className="navbar">
           <div className="navbar__logo">
            <img src="https://i.imgur.com/ltEmxpd.png"alt="/" />
           </div>
           <div className="navbar__items"  tabIndex="1"  >
           <img src={img1} alt="/" />
           <div >
               students
           </div >
           </div>
           <div className="navbar__items"  tabIndex="2">
           <img src={img3} alt="/"  />
           <div >
               Lession Plan
           </div >
           </div>
           <div className="navbar__items"  tabIndex="3">
           <img src={img2} alt="/" />
           <div >
               Settings
           </div >
           </div>

        </div>
    )
}

export default Navbar
