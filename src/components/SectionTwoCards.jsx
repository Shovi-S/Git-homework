import React from 'react'
import SectionTwoCardsFirst from './SectionTwoCardsFirst'
import SectionTwoCardsSecond from './SectionTwoCardsSecond'
import SecctionTwoCardsThird from './SecctionTwoCardsThird'

const SectionTwoCards = () => {
  return (
    <div className='w-300 flex justify-between mt-16.25'>
        <SectionTwoCardsFirst />
        <SectionTwoCardsSecond />
        <SecctionTwoCardsThird />
    </div>
  )
}

export default SectionTwoCards