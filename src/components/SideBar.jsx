import React, { useEffect, useState } from 'react'
import Search from './Search'
import Contacts from './Contacts'
import Add from './Add'

export default function SideBar() {
  const [contact, setContact] = useState(localStorage.getItem("contacts") ? JSON.parse(localStorage.getItem("contacts")) : [])
  const [filtered, setFiltered] = useState("")
  const [add, setAdd] = useState(false)

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact))
  }, [contact])

  const AddContact = ({ name, number }) => {
    setContact([...contact, { name, number }])
    setAdd(false)
  }

  let noOfContact = contact?.length
  const handleDelete = (index) => {
    setContact(contact.filter((_, i) => i !== index))
  }
let noOffilter = filtered.length
  return (
    <div className='flex'>
      <div className='w-1/3 bg-blue-200 h-screen py-5 px-10'>
        <div className='flex'>
          <Search contact={contact} setFiltered={setFiltered}   />
          <button className='px-3 py-2 bg-blue-950 text-white text-2xl rounded-md font-semibold' onClick={() => setAdd(!add)}>{add ? "close" : "Add"}</button>
        </div>
        <h1 className='text-2xl font-bold text-white bg-slate-900 px-5 py-5 rounded-2xl my-4'>
          {
          noOfContact ? `List Of Contacts ${noOfContact}` :`List Of Contacts 0 ` 
      }

</h1>

       

        {
         (filtered || contact)?.map((c, index) => <Contacts
            key={index} name={c.name} number={c.number} handleDelete={() => handleDelete(index)} filtered={c.filtered}
          />)
        }

      </div>
      <div className='mx-10'>
        {add ? <Add AddContact={AddContact} setAdd={setAdd} /> : ""}

      </div>
    </div>
  )
}
