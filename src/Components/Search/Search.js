import { Input } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Search = () => {
    const [search,setSearch]=useState({});
    // console.log("handleSearch")
    const handleSearch=()=>{
        console.log()
    }
  return (
   <Input placeholder="Search here" type="text" onChange={(e)=>handleSearch(e)}></Input>
  )
}
