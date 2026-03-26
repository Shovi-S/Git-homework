import React from 'react'
import Nav from './Nav'
import HeaderInfo from './HeaderInfo'

const Header = () => {
  return (
    <header>
        <div className='max-w-360 mt-11.75 mx-35'>
          <Nav />

          <HeaderInfo />
        </div>
    </header>
  )
}

export default Header