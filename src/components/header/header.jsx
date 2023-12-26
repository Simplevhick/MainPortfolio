import React from 'react'
import "./header.css"
import CTA from "./CTA"
import brownre from "../../assets/brownre.png"
import HeaderSocials from "./headerSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container"> 
      <h5> Hello I'm </h5>
      <h1> Chimbor Victor </h1>
      <h5 className="text-light"> Fullstack Developer </h5>
      <CTA />
      <HeaderSocials />
        <div className="me">
            <img src={brownre} alt="hair"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
       </header>
  )
}

export default Header; 