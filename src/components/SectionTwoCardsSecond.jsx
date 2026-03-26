import React from 'react'

const SectionTwoCardsSecond = () => {
    return (
        <div className='rounded-3xl shadow-2xl bg-white'>
            <img className='w-78.5 h-100 rounded-t-3xl' src="./src/assets/Londonn.jpg" alt="" />

            <div className='flex justify-between px-6.25 items-center pt-7'>
                <h5  className=' text-[#5E6282] text-[18px]'>London, Uk</h5>

                <h5 className='text-[#5E6282] text-[18px]'>$4,2k</h5>
            </div>

            <h5 className='mb-8 text-[#5E6282] text-[16px] mt-5 pl-5 text-start'>12 days trip</h5>
        </div>
    )
}

export default SectionTwoCardsSecond