import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.png'

const linksData = [
  {
    text: "Overons"
  },
  {
    text: "Social Media"
  },
  {
    text: "Counters"
  },
  {
    text: "Contact"
  }
]

const touchData = [
  {
    text: "Crechterwoord K12 182 DK Alknjkcb"
  },
  {
    text: "085-132567"
  },
  {
    text: "info@payme.net"
  }
]

const companyData = [
  {
    text: "Contact"
  },
  {
    text: "Privacy Policy"
  },
  {
    text: "Contact"
  }
]



const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
            {linksData.map((data) => (
              <p>{data.text}</p>
            ))}
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
            {companyData.map((data) => (
              <p>{data.text}</p>
            ))}
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
            {touchData.map((data) => (
              <p>{data.text}</p>
            ))}
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}


export default Footer