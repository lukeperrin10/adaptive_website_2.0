import React from 'react'
import ContactForm from '../components/ContactForm'
import { Linkedin } from '../components/SVGs'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='heading-2'>{'< contact us />'}</h2>
      <div className='contact__contact-information'>
        <div className='contact__get-in-touch'>
          <h4 className='heading-4 mb-xl'>get in touch</h4>
          <p className='paragraph mb-xl'>
            To Know more about what we can offer you, please get in touch. Feel
            free to send us an email, a message on LinkedIn or use the form. We
            will be happy to discuss your requirements and present possible
            solutions.
          </p>
          <h6 className='heading-6 mb-xl'>Email - info@adaptivelabs.se</h6>

          <a
            href='https://www.linkedin.com/company/adaptivelabsnordics/'
            target='_blank'
            rel='noreferrer'
            className='sns-link'>
            <Linkedin />
          </a>
        </div>
        <div className='contact__form-box'>
          <h4 className='heading-4 mb-xl'>send us a message</h4>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact
