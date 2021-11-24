import React from 'react'
import { FlexCoast, Timotuz, KCSC, Walborg } from '../components/SVGs'

const Clients = () => {
  return (
    <div className='clients'>
      <h2 className='heading-2 mb-xl'>{'< clients that are adapting />'}</h2>
      <div className='clients__logo-box'>
        <FlexCoast />
        <Timotuz />
        <KCSC />
        <Walborg />
      </div>
    </div>
  )
}

export default Clients
