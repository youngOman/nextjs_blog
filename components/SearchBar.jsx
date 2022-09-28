import React,{ useState } from 'react'

const SearchBar = () => {

    const [ query,setQuery ] = useState("");

    // console.log(query)
    
  return (
        
    <div className="relative"> 
        <button type='submit' className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </button>
        <input 
        type="text" 
        id="search" 
        placeholder="Search"
        value={query}
        onChange={(e)=>(setQuery(e.target.value))}
        className="border pl-10 p-3 border-gray-600 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block " 
        required
        />
    </div>
    
  )
}

export default SearchBar