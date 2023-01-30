import React, { useState } from 'react'

 const Search = ({fetchData}) => {
const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        fetchData(searchTerm);

    }
  return (
    <form onSubmit={handleSearch} className="searchBar dark:text-white text-black font-medium flex justify-center " id="search">
        <input type="search"
            className="outline-none w-11/12 md:w-1/2  bg-[#F4F5F5] dark:bg-[#1E1F1E] p-2 rounded-xl focus:outline-2 focus:outline-purple-700 shadow-xl my-4"
            placeholder="Search for any word" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
    </form>
  )
}

export default Search;