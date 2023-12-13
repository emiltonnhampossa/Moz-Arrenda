'use client';

import React from "react"

 
export function Container({children}) {
 
  return (
   <div className='fixed w-full bg-white z-10 shadow-sm'>
    <div className="
    max-w-[2520px]
    
    
    
    ">
        {children}
    </div>
   </div>
  )
}