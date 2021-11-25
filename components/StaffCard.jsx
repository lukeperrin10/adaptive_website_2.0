import React from 'react'
import Image from 'next/image'

const StaffCard = ({ image, name, description, color }) => {

  return (
    <>
      <div className={color}>
        <div className='worker__inner-circle'>
          <div className='worker__image'>
            <Image src={image} alt={`Owner ${name}`}></Image>
          </div>
        </div>
      </div>
      <div>
        <h4 className='worker__name'>{name}</h4>
        <p className='worker__text'>{description}</p>
      </div>
    </>
  )
}

export default StaffCard
