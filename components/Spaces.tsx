'use client';
import React, { useEffect, useState } from 'react'

const SpaceData = ({data} : any) => {
  return(
    <div>
      {data.map((Space: any)=> Space.title)}
    </div>
  )
}

const Spaces = () => {
  const [searchText, setSearchText] = useState("");
  const [Spaces, setSpaces] = useState([]);
  const handleSearchChange = () =>{
    
  }
  useEffect(()=>{
    const fetchSpaces = async () =>{
      const response = await fetch('/api/Spaces');
      const data = await response.json();
      setSpaces(data);
      console.log(Spaces);
    }
    fetchSpaces();
  },[])
  return (
    <section className="feed">
      <SpaceData data={Spaces}/>
      <form className="searchbar">
        <input type="text" placeholder="Search for a Space" value={searchText} onChange={handleSearchChange}></input>
      </form>
      
    </section>
  )
}

export default Spaces