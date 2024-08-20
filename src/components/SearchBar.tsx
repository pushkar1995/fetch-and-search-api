import { useState } from 'react'

interface SearchBarProps {
    setSearchUser: any
}

const SearchBar = (props: SearchBarProps) => {
    const { setSearchUser } = props
    
    const handleSearch = () => { }
  return (
    <form className='w-[540px] relative' onSubmit={handleSearch}>
        <div className='relative'>
            <input 
                type='search' 
                placeholder='Search Users' 
                className='w-full p-4 text-black rounded-md bg-slate-200 border-0'
                onChange={(e) => setSearchUser(e.target.value)} 
            />
        </div>
    </form>
  )
}

export default SearchBar