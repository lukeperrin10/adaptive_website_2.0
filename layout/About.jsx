import React from 'react'
import { staffCardsData } from '../public/assets/data/staffCards'
import StaffCard from '../components/StaffCard'

const About = () => {
  return (
    <div className='about'>
      <h2 className='heading-2 mb-xl'>{'< about us />'}</h2>
      <p className='about__paragraph paragraph'>
        Adaptive Labs Nordics was founded by a group of passionate developers
        and designers. With a goal to build a company that puts its customers
        needs first through Agile Methodologies and close partnerships.<br></br>
        <br></br>
        Using automated testing to deliver high quality full stack applications
        on time and within scope. We use agile and unprecedented creativity to
        meet your technical needs. Driving innovation and the future by teaching
        future developers through Craft Academy.
      </p>
      <div className='worker'>
        {staffCardsData.map(({ name, id, image, description, color }) => (
          <StaffCard
            name={name}
            key={id}
            image={image}
            description={description}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

export default About
