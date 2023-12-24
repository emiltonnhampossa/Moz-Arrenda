'use client'
import React from "react"
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom"
import ActiveLink from "./ActiveLink"
import { usePathname } from 'next/navigation'



export default function Header() {
  const pathname = usePathname()
  return (
      <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <h1 className='font-bold 
        text-sm 
        sm:text-xl flex flex-wrap'>
          <span className='text-slate-500'>Moz</span>
          <span className='text-slate-700'>Arrenda</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input 
          type="text" 
          placeholder='Search..'
          className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch className="text-slate-600"/>
        </form>
        <ul className="flex gap-4">
           
            <li className="hidden sm:inline text-slate-700 hover:underline">
            <ActiveLink className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
                Home
             </ActiveLink>
            </li>
           
           
            <li className="hidden sm:inline text-slate-700 hover:underline">
            <ActiveLink  className={`link ${pathname === '/users/about' ? 'active' : ''}`} href="/users/About">
                About
             </ActiveLink>
              </li>
                
                
            <li className=" text-slate-700 hover:underline">
            <ActiveLink  className={`link ${pathname === '/users/SignIn' ? 'active' : ''}`} href="/users/SignIn">
                Sign-in
              </ActiveLink>
            </li>
                
        </ul>
        </div>
      </header>
)}
