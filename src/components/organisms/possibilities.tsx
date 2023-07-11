import React from 'react'
import PossibilitiesLeft from '@/components/molecues/possibilitiesleft'
import PossibilitiesRight from '@/components/molecues/possibilitiesright'

function Possibilities() {
  return (
  <div className='flex flex-row justify-center items-center w-full h-[50rem]'>
    <PossibilitiesLeft />
    <PossibilitiesRight />
  </div>
  )
}

export default Possibilities