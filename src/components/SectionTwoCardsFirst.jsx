import React from 'react'

const SectionTwoCardsFirst = () => {
  return (
    <div className='rounded-3xl bg-white shadow-2xl'>
        <img className=' w-78.5 h-100 rounded-t-3xl' src="./src/assets/ITaly.png" alt="" />

        <div className='flex justify-between px-6.25 items-center pt-7'>
            <h5 className=' text-[#5E6282] text-[18px]'>Rome, Italy</h5>

            <h5 className='text-[#5E6282] text-[18px]'>$5,42k</h5>
        </div>

        <h5 className='text-[#5E6282] text-[16px] mt-5 pl-5 text-start'>10 days trip</h5>
    </div>
  )
}

export default SectionTwoCardsFirst