import React from 'react'
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"
// import {PiMessengerLogoThin} from "react-icons/pi"
// import {FaWhatsapp} from "react-icons/fa"
import { useRef } from 'react';
import emailjs from "emailjs-com"
import {FaSnapchat} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b9ohhyq', 'template_48ipm35', form.current, 'hgK1uzyMgQDmWLtuF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset()
  }; 
  return (
    <section id="contact">
       <h5 className='contact__h5'> Get In Touch</h5>
       <h2> Contact Me  </h2>

       <div className='container contact__container'>
          <div className="contact__options">
              <article className="contact__option">
                  <MdOutlineEmail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>chimborvictor10@email.com</h5>
                <a href="mailto:chimborvictor10@gmail.com" target="_blank">Send a message</a>
              </article>
              <article className="contact__option">
                  <FaSnapchat className='contact__option-icon'/>
                <h4>Snapchat</h4>
                <h5>Simple Vhick</h5>
                <a href="https://www.snapchat.com/add/svhick20" target="_blank">Send a message</a>
              </article>
              <article className="contact__option">
                  <FaTwitter className='contact__option-icon' />
                <h4>Twitter</h4>
                <h5>chimbor Victor</h5>
                <a href="https://twitter.com/simplevhick" target="_blank">Send a message</a>
              </article>
          </div>
          {/* End of contact Option */}
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required/>
              <input type="email" name="email" placeholder="Your email" required/>
              <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" class="btn btn-primary">Send Message</button>     
           </form>
       </div>
    </section>
  )
}

export default Contact