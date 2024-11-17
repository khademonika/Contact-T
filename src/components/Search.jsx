import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search({ contact, setFiltered}) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const filtereds = contact.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filtereds);
  };

  const onChange = (e) => {
  
    setSearch(e.target.value);
  };

  return (
    <div className='flex w-full'>
      <input
        type="text"
        placeholder='Search Here'
        onChange={onChange}
        value={search}
        className='outline-none text-2xl border-none rounded-lg placeholder:text-2xl font-semibold px-5 py-2'
      />
     <div  onClick={handleSearch}>
     <FaSearch
        className='text-2xl relative right-10 top-2 cursor-pointer'
       
      />
     </div>
    </div>
  );
}
