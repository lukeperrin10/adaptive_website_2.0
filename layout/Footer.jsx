import React, { useState } from 'react'
import { ReactCSSTransitionGroup } from 'react-transition-group'
import Image from 'next/image'
import Adaptive_logo from '../public/assets/images/Adaptive_logo_WHITE_PINK.png'

const Footer = () => {
  const ballsArray = Array.from(Array(Math.floor(1920 / 20)).keys())
  const [showBall, setShowBall] = useState(false)

  // const generateBalls = () => {
  const generateBalls = ballsArray.map((ball, i) => (
    <div className='ball' key='i'></div>
  ))
  // for (var i = 0; i < Math.floor(1920 / 20); i++) {
  //   <div className='ball'></div>

  // const colors = ['#28323B', '#FFA036']
  // $('.ball')
  //   .eq(i)
  //   .css({
  //     bottom: '0px',
  //     left: Math.random() * window.innerWidth - 100,
  //     'animation-delay': Math.random() * 5 + 's',
  //     transform: 'translateY(' + Math.random() * 10 + 'px)',
  //     'background-color': colors[i % 2],
  //   })
  // }
  // }

  // const balls = ballsArray.map((ball, i) => (
  //   <div key={i} className={`ball--${i}`}>
  //     {ball}
  //   </div>
  // ))

  const Wave = (props) => {
    return (
      <svg
        id='prefix__Layer_1'
        xmlns='http://www.w3.org/2000/svg'
        x={0}
        y={0}
        viewBox={'0 518 1920 400'}
        xmlSpace='preserve'
        {...props}>
        <path
          d='M0 770.6s100.3-114.4 255.6-107.9 287.7 95 596.6 89.9c108.3-1.8 164.3-28.6 502.6-85.8 154.9-26.2 565.5-77 565.1-10.6-.2 38.7-1.6 439.9 0 423.8H0V770.6z'
          stroke='#250022'
          fill='#250022'
          strokeMiterlimit={10}
        />
      </svg>
    )
  }

  return (
    <div className='footer'>
      footer
      <Wave className='outer-wave' />
      <div className='footer-logo-box'>
        <Image
          className='footer-logo'
          src={Adaptive_logo}
          data-cy='footer-logo'
          alt='Adaptive Labs Nordics AB Logo'
        />
      </div>
    </div>
  )
}

export default Footer
