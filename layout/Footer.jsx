import React, {useState} from 'react'
import Image from 'next/image'
import Adaptive_logo from '../public/assets/images/Adaptive_logo_WHITE_PINK.png'
import { Wave } from '../components/SVGs'
import {RaisingCircleBg} from '../components/AnimatedBg'

const Footer = () => {



  return (
    <div className='footer'>
      <Wave className='footer__wave' />
      <div className='footer__logo-box'>
        <Image
          className='footer__logo'
          src={Adaptive_logo}
          data-cy='footer-logo'
          alt='Adaptive Labs Nordics AB Logo'
        />
      </div>
      <RaisingCircleBg />
    </div>
  )
}

export default Footer