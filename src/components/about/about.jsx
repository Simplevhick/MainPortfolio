import React from 'react'
import "./about.css"
import brown from "../../assets/brown.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5 className='first-h5'> Get To Know </h5>
      <h5 className='first-p'> About Me </h5>


       <div className='container about__container'>
          <div className='about__me'> 
              <div className='about__me-image'>
               <img src={brown} alt="brown" />
              </div>
          </div>

          <div className='about__content'>
              <div className='about__cards'>
                  <article className='about__card'>
                      <FaAward className='about__icon'/>
                      <h5>Experience</h5>
                      <small>6+ Months Working</small>
                  </article>
                  
                  <article className='about__card'>
                      <FiUsers className='about__icon'/>
                      <h5>Clients</h5>
                      <small>0 Worldwide</small>
                  </article>
                  
                  <article className='about__card'>
                      <VscFolderLibrary className='about__icon'/>
                      <h5>Projects</h5>
                      <small>4+ Completed Projects</small>
                  </article>                
              </div>

              <p>
              Efficient, courteous and enthusiastic, I am interested in Tech and everthing in its entirety. I am newly intoduced into the world of web programming and i am fascinated. Studied frontend development and gained valuable skills, knowledge and experience at Spraditech.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
       </div>      
    </section>
  )
}

export default About