import React from 'react'
import SectionOneCardsFirst from './SectionOneCardsFirst'
import SectionOneCardsSecond from './SectionOneCardsSecond'
import SectionOneCardsThird from './SectionOneCardsThird'
import SectionOneCardsForth from './SectionOneCardsForth'

const SectionOneCards = () => {
  return (
    <div className='flex items-center justify-between'>
        <SectionOneCardsFirst />
        <SectionOneCardsSecond />
        <SectionOneCardsThird />
        <SectionOneCardsForth />
    </div>
  )
}

export default SectionOneCards