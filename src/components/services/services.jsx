import React from 'react'
import "./services.css";
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
        <h5 className='service__h5'>What I Offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            <article  className='service'>
                <div className='service__head'>
                    <h3>UI/UX Design</h3>
                </div>

                <ul className='service__list'>
                    
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p>  My design are user-centered and focus on creating an intuitive and enjoyable user experience </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I use color, layout, and typography to create inrerfaces that are aesthetically pleasing and easy to navigate. </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p>  I have experience designing for both mobile and web app. </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I am familiar with best practices </p>
                    </li>
                </ul>
            </article>
            {/* end of ui/ux */}
            <article  className='service'>
                <div className='service__head'>
                    <h3> Web Development </h3>
                </div>

                <ul className='service__list'>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> My Websites are built using clean semantic HTML and CSS to ensure cross brower compatibilityand accessibility </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I have popular experience using React to create dynamic, interactive web experiences </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I have experience with responsive desgin, ensuring that my websites look great  </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I take pride in my attention to detail and ability to create beautifully </p>
                    </li> 
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> Functional websites. that meets your need </p>
                    </li>
                </ul>
            </article>
            {/* Web Development */}
            <article  className='service'>
                <div className='service__head'>
                    <h3> Content Creation </h3>
                </div>

                <ul className='service__list'>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> My Content is created with the audie inn mind,ensuring that it is relevant, engaging, and valuable </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I have experience creating variety of content types, including social media posts. </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I have a knack for storytelling and am able to create content. </p>
                    </li>
                    <li>
                      <BiCheck className='service__list-icon'/>
                      <p> I have passion for creating high quality content that will help businesses. </p>
                    </li>
                   
                  
                </ul>
            </article>
            {/* end of Content Creation */}
        </div>
      </section>
  )
}

export default Services