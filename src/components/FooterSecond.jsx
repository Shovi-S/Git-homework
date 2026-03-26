import React from 'react'
import FooterSecondCardFirst from './FooterSecondCardFirst'
import FooterSecondCardSecond from './FooterSecondCardSecond'
import FooterSecondCardThird from './FooterSecondCardThird'

const FooterSecond = () => {
  return (
    <div className='flex gap-18'>
        <FooterSecondCardFirst />
        <FooterSecondCardSecond />
        <FooterSecondCardThird />
    </div>
  )
}

export default FooterSecond