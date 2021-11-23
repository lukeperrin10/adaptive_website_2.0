import React, { useState } from 'react'
import { ChevronDown } from './chevron_down'

const Accordion = ({ title, content, color}) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={color}
      onClick={() => setIsActive(!isActive)}>
      <h3 className='heading-3 mb-lg'>{title}</h3>
      {isActive && <div className='accordion-item__content'>{content}</div>}
      <ChevronDown />
    </div>
  )
}

export default Accordion
