import React from 'react'
import { Vial1, Vial2, Vial3, Vial4, Vial5, Vial6 } from '../components/Vials'

const Technologies = () => {
  return (
    <div className='tech'>
      <h2 className='heading-2 mb-xl'>{'< technologies />'}</h2>
      <div className='tech__icon-box'>
        <div className='tech__icon'>
          <Vial1 />
          <h3 className='tech__name tech__name--cypress'>Cypress</h3>
        </div>
        <div className='tech__icon'>
          <Vial2 />
          <h3 className='tech__name tech__name--node'>NodeJS</h3>
        </div>
        <div className='tech__icon'>
          <Vial3 />
          <h3 className='tech__name tech__name--react'>React</h3>
        </div>
        <div className='tech__icon'>
          <Vial4 />
          <h3 className='tech__name tech__name--rails'>Rails</h3>
        </div>
        <div className='tech__icon'>
          <Vial5 />
          <h3 className='tech__name tech__name--next'>NextJS</h3>
        </div>
        <div className='tech__icon'>
          <Vial6 />
          <h3 className='tech__name tech__name--rspec'>RSpec</h3>
        </div>
      </div>
    </div>
  )
}

export default Technologies
