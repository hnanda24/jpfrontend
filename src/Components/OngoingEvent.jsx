import React from 'react'
import { data } from '../assets/mockData'
// import '../assets/OngoingEvent.css'

const OngoingEvent = () => {
  return (
    <div className='flex justify-center flex-wrap items-center gap-8 mt-8 w-full '>
      {data.map((val) => {
        return (
          <div className='w-1/5 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            <img
              className=''
              src={val.image_link}
            />{' '}
            <div className='flex flex-col gap-3'>
              <h3 className=''>{val.name}</h3>
              <h4 className=''>{val.location}</h4>
              <h4 className=''>{val.pricing}</h4>
            </div>
          </div>
        )
      })}
      ;
    </div>
  )
}

export default OngoingEvent
