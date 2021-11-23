import React from 'react'
import Accordion from '../components/Accordion'
import { accordionData } from '../public/assets/data/accordionData'

const Process = () => {
  return (
    <div className='process'>
      <div className='accordion'>
        <div className='accordion__static'>
          <h2 className='heading-2 mb-lg'>{'< Our Process />'}</h2>
          <p className='text'>
            Here at Adaptive Labs we work with the vision that everything is
            changing. We are here to help you adapt to these changes. <br></br>{' '}
            Below you can read the 4 step Adaptive process
          </p>
        </div>
        <div>
          {accordionData.map(({ title, content, id, color }) => (
            <Accordion color={color} key={id} title={title} content={content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Process
