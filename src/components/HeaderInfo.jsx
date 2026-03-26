import React from 'react'
import HeaderInfoLeft from './HeaderInfoLeft'
import HeaderInfoRight from './HeaderInfoRight'

const HeaderInfo = () => {
  return (
    <div className='max-w-296 flex mt-5'>
        <HeaderInfoLeft />
        <HeaderInfoRight />
    </div>
  )
}

export default HeaderInfo