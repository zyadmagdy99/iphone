import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width justify-between'>
        <Link to={'/'}>
        <img src={appleImg} width={14} height={18} alt="" />

        </Link>
        <div className='flex flex-1 justify-center ms-6'>
        <div className='flex '>
              <Link to={"/store"} className='px-5 flex gap-10 text-sm justify-center cursor-pointer text-gray hover:text-white tranistion-all'>Store</Link>
            
              <Link className='px-5 flex gap-10 text-sm justify-center cursor-pointer text-gray hover:text-white tranistion-all' to={'/support'}>Support</Link>
              </div>
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
