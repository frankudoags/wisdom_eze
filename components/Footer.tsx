import React from 'react'

const Footer = () => {
  return (
    <footer className='min-h-[20vh] bg-[#07092e] text-white py-12'>
      <div className='flex flex-col gap-4 justify-center items-center py-8'>
        <div className='flex items-center gap-2 flex-wrap justify-center'>
          <h1>Connect with Wisdom Ezekiel</h1>
        </div>
        <div className='flex items-center gap-2 flex-wrap justify-center'>
          <a href="google.com" target="_blank" rel="noopener noreferrer" className='hover:border-b'>Instagram</a>
          <span>|</span>
          <a href="google.com" target="_blank" rel="noopener noreferrer" className='hover:border-b'>Twitter</a>
          <span>|</span>
          <a href="google.com" target="_blank" rel="noopener noreferrer" className='hover:border-b'>Facebook</a>
          <span>|</span>
          <a href="google.com" target="_blank" rel="noopener noreferrer" className='hover:border-b'>LinkedIn</a>
        </div>
        <p className='mt-8 text-sm'>Copyright © {new Date().getFullYear()}, Wisdom Ezekiel, All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
