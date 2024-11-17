import React, { useEffect, useState } from 'react'
import Contacts from './Contacts'

export default function Add({AddContact , setAdd}) {
   const [name, setName] = useState("")
   const [number, setNumber] = useState("")
  
   const handleNameChange= (e)=>{
         setName(e.target.value)
   }
   const handleNumberChange = (e)=>{
    setNumber(e.target.value)
   }
   const onAdd = ()=>{
    if(name&&number)
    AddContact({name, number})
    setName("")
    setNumber("")
   }
  
  return (
    <>
    <div className='bg-blue-300 w-full px-5 py-7 rounded-2xl my-5 '>
    <p className='text-2xl font-bold px-5 py-5  my-4'>Enter the Name </p>
     <input type="text" value={name} onChange={handleNameChange} placeholder='Enter the Name' className='outline-none  text-2xl border-none rounded-lg  placeholder:text-2xl font-semibold px-5 py-2 ' />
     <p className='text-2xl font-bold px-5 py-5  my-4'>Enter the Number </p>
     <input type="text" value={number} onChange={handleNumberChange} placeholder='Enter the Number' className='outline-none  text-2xl border-none rounded-lg  placeholder:text-2xl font-semibold px-5 py-2 ' />
     <button onClick={onAdd} className='py-2 px-3 text-white text-2xl bg-slate-900 rounded-md mx-1'>Add</button>
     <button onClick={()=>setAdd(false)} className='py-2 px-3 text-white text-2xl bg-slate-900 rounded-md mx-1'>Cancle</button>


   
    </div>
    
      </>
  )
}
