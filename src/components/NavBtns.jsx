import React from 'react'
import NavLogBtn from './NavLogBtn'
import NavSignBtn from './NavSignBtn'
import NavLanguage from './NavLanguage'

const NavBtns = () => {
  return (
    <div className='flex justify-center items-center gap-11.25'>
        <NavLogBtn />
        <NavSignBtn />
        <NavLanguage />
    </div>
  )
}

export default NavBtns