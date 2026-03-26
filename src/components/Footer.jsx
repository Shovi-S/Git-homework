import React from 'react'
import FooterFirst from './FooterFirst'
import FooterSecond from './FooterSecond'
import FooterThird from './FooterThird'

const Footer = () => {
    return (
        <footer className='mt-10'>
            <div className='max-w-360 flex justify-between mt-11.75 mx-35'>
                <FooterFirst />

                <FooterSecond />

                <FooterThird />
            </div>

            <h2 className='text-[#5E6282] text-[14px] text-center mt-21 mb-27.5'>All rights shovi1985@gmail.com</h2>
        </footer>
    )
}

export default Footer