import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  return (
    <div className='flex w-full'>
        <input type="text" placeholder='Search Here' className='outline-none  text-2xl border-none rounded-lg  placeholder:text-2xl font-semibold px-5 py-2  ' />
        <FaSearch className='text-2xl relative right-10 top-2' />
    </div>
  )
}
