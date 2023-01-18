import React from 'react'
import { useState } from 'react'
function Input({text,className,handleOnchange}) {
  const [value, setValue] = useState("")
  return (
    <div>
      <input className={className} placeholder={text}   onChange={(e)=>handleOnchange(e.target.value)}/>
    </div>
  )
}

export default Input
