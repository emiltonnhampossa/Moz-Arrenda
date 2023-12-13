/* eslint-disable jsx-a11y/alt-text */
'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Logo() {

    return(
        <>
         <Image
    className="hidden md:block"
    cursor-pointer
    height={50}
    width={50}
    src="/images/logo.jpg"
    />
        </>
    )
   
}