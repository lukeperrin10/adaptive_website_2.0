import React from 'react'

export const ChevronDown = ({isActive}) => {
  const extended = 'accordion-item__icon accordion-item__icon--extended' 
  const closed = 'accordion-item__icon'

  return (
    <svg
      className={isActive ? extended : closed}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 20 20'>
      <title>chevron-thin-down</title>
      <path d='M17.418 6.109c0.272-0.268 0.709-0.268 0.979 0s0.271 0.701 0 0.969l-7.908 7.83c-0.27 0.268-0.707 0.268-0.979 0l-7.908-7.83c-0.27-0.268-0.27-0.701 0-0.969s0.709-0.268 0.979 0l7.419 7.141 7.418-7.141z'></path>
    </svg>
  )
}
