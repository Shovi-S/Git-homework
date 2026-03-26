import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'


const Main = () => {
  return (
    <main>
        <div className='max-w-360 mt-11.75 mx-35'>
          <SectionOne />

          <SectionTwo />
        </div>
    </main>
  )
}

export default Main