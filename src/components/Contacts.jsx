import React from 'react'

export default function Contacts({name,number , handleDelete , filtered}) {
  return (
    <div className='bg-slate-200 rounded-sm px-5 py-2 w-full flex justify-between'>
      <div>
      <h1 className='text-2xl font-medium '>{name}</h1>
      <p className='text-xl font-normal'>{number}</p>
      </div>
        <button className='px-5 py-1 bg-red-700 text-white font-semibold text-xl rounded-lg' onClick={handleDelete}>Delete</button>
    </div>
  )
}
