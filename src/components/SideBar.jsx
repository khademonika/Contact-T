import React, { useEffect, useState } from 'react'
import Search from './Search'
import Contacts from './Contacts'
import Add from './Add'

export default function SideBar() {
  const [contact, setContact] = useState(
    localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) :
      [])
  const [add, setAdd] = useState(false)
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }, [contact])
  const AddContact = ({ name, number }) => {
    setContact([...contact, { name, number }])
    setAdd(false)
  }
  const handleDelete = (index)=>{
    setContact(contact.filter((_, i) => i !== index))
  }
  return (
    <div className='w-1/3 bg-blue-200 h-screen py-5 px-10'>
      <div className='flex'>
        <Search />
        <button className='px-3 py-2 bg-blue-950 text-white text-2xl rounded-md font-semibold' onClick={() => setAdd(!add)}>{add ? "close" : "Add"}</button>

      </div>
      <h1 className='text-2xl font-bold text-white bg-slate-900 px-5 py-5 rounded-2xl my-4'>List Of Contacts</h1>

      {
        contact?.map((c, index) => <Contacts
          key={index} name={c.name} number={c.number}  handleDelete = {()=>handleDelete(index)}
        />)
      }
      {add ? <Add AddContact={AddContact} setAdd = {setAdd}/> : ""}
    </div>
  )
}