import React, { useState } from 'react'
import { ChevronDown } from './SVGs'

const Accordion = ({ title, content, color }) => {
  const [isActive, setIsActive] = useState(false)

  const extended = 'accordion-item__content accordion-item__content--extended paragraph'
  const closed = 'accordion-item__content paragraph'

  return (
    <div className={color} onClick={() => setIsActive(!isActive)}>
      <h3 className='heading-3 mb-lg'>{title}</h3>
      <div className={isActive ? extended : closed}>{content}</div>
      <ChevronDown isActive={isActive} />
    </div>
  )
}

export default Accordion
