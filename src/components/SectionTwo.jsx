import React from 'react'
import SectionTwoCards from './SectionTwoCards'

const SectionTwo = () => {
  return (
    <section className='text-center mt-39'>
        <h3 className='text-[#5E6282] text-[18px] font-semibold '>Top Selling</h3>

        <h2 className='text-[#14183E] text-[50px] font-bold'>Top Destinations</h2>

        <SectionTwoCards />
    </section>
  )
}

export default SectionTwo