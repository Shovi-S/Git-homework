import React from 'react'
import NavImg from './NavImg'
import NavUl from './NavUl'
import NavBtns from './NavBtns'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center'>
        <NavImg />

        <NavUl />

        <NavBtns />
    </nav>
  )
}

export default Nav