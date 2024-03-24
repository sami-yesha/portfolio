import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
<div className=''>
 <Link href="/" className='text-sm bg-black rounded-md p-1 flex items-center justify-center'>
  <span className='text-white mr-1'>black</span>
  <span className='w-12 h-88 rounded bg-white text-black flex items-center justify-center'>.white</span>
 </Link>
</div>
<div className=''></div>
    </div>
  )
}

export default Navbar
