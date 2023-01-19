import React from 'react'
import Button from './Button'


const Suscribe = () => {
  return (
      <div className='max-w-5xl mx-auto py-20 md:py-40 px-4'>
        <div className='flex flex-col items-center justify-center gap-4 md:gap-8'>
          <h1 className='text-2xl md:text-4xl font-medium text-center'>JOIN WISDOM&apos;S MENTORSHIP NETWORK</h1>
          <div>
            <p className='pb-8 md:pb-4'>Want to 10X your wealth and productivity and don&apos;t know where to start?</p>
          </div>
          <div>
            <Button text='START HERE' path='/' />
          </div>
        </div>
      </div>
  )
}

export default Suscribe