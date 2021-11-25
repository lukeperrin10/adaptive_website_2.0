import React from 'react'
import Image from 'next/image'

const StaffCard = ({ image, name, description, color }) => {
  const pinkOuter = 'worker__outer-circle'
  const blueOuter = 'worker__outer-circle'

  return (
    <>
      <div className={color}>
        <div className='worker__inner-circle'>
          <div className='worker__image'>
            <Image src={image} alt='co worker'></Image>
          </div>
        </div>
      </div>
      <div className='worker__content'>
        <h4 className='worker__name'>{name}</h4>
        <p className='worker__text'>{description}</p>
      </div>
    </>
  )
}

export default StaffCard
