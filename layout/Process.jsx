import React from 'react'

const Process = () => {
  return (
    <div className='process'>
      <div className='process-grid'>
        <div className='process-grid__static'>
          <h2 className='heading-2'>Our Process</h2>
          <p className='text'>
            Here at Adaptive Labs we work with the vision that everything is
            changing. We are here to help you adapt to these changes. <br></br>{' '}
            Below you can read the 4 step Adaptive process
          </p>
        </div>
        <div className='process-grid__flexible  process-grid__flexible--1'>
          <h3 className='heading-3'>1. Meeting You</h3>
          <div className='content'>
            <p>
              First we will arrange a meeting with you, in person or remote,
              we're flexible. During the meeting, we want to get to know you and
              the expectations on your application. This provides us with core
              information to deliver a first draft or "LoFi". Once you're happy,
              we can move forward with the design phase.
            </p>
          </div>
        </div>
        <div className='process-grid__flexible  process-grid__flexible--2'>
          <h3 className='heading-3'>2. Design Phase</h3>
          <div className='content'>
            <p>
              During this phase we deal with generating a detailed draft or
              "HiFi" and application architecture. How it will look and work on
              completion. Conducting user testing to verify a friendly and
              welcoming UI/UX. The "HiFi's" will be shared via a link which
              gives the possibility to navigate the application and create
              comments and notes. A final meeting is arranged to review
              aforementioned "HiFi's". Hopefully everything is in order and
              development can begin.
            </p>
          </div>
        </div>
        <div className='process-grid__flexible  process-grid__flexible--3'>
          <h3 className='heading-3'>3. Developing</h3>
          <div className='content'>
            <p>
              Here is where those designs become reality. We work from the
              agreed upon "Hifi's", on completion the application should be
              almost identical to these. During this phase we deploy a
              development site, you will receive a link, so you can monitor the
              progress made. As Heraclitus said "change is the only constant in
              life". Which is why we'll have small check-in's to make sure
              you're happy and discuss any changes and how to approach them. We
              use automated testing, which reduces bugs, improves
              maintainability and a higher standard of code. Less problems for
              you and less head scratching for us. That’s it, time to move
              forward.
            </p>
          </div>
        </div>
        <div className='process-grid__flexible process-grid__flexible--4'>
          <h3 className='heading-3'>4. Delivery</h3>
          <div className='content'>
            <p className='paragraph'>
              The time has come for the final application delivery. We'll give
              you a guided tour of your application, answer your questions,
              supply any documentation and deploy the site on your domain for
              the world to see. That's the Adaptive Process
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process
