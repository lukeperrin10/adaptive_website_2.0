import React from 'react'
import Image from 'next/image'
import craftLogo from '../public/assets/SVG/craft_academy.svg'

const CraftAcademy = () => {
  return (
    <div className='craft-academy'>
      <h2 className='heading-2'>{'< Our Process />'}</h2>
      <h4 className='sub-heading'>The future written in code</h4>
      <div className='craft-academy__content'>
        <p className='paragraph'>
          Digitalization is not only changing the way we do business, it also
          changes the way we work and what skills we as professionals need to
          have. Gaining those skills in an ever-changing landscape is a
          challenge in itself and presents a unique set of problems for
          educational institutions. Adaptive Labs wants to be a part of the
          solution.<br></br> Craft Academy is our training and education brand.
          With Craft Academy, you'll learn about digitalization and web
          development in an exciting, fast-paced environment and get help to
          adapt to the new paradigm.
        </p>
      </div>
      <Image src={craftLogo} alt='Craft Academy Logo' />
      <button className='btn btn--orange'>{'{ craft academy }'}</button>
    </div>
  )
}

export default CraftAcademy
