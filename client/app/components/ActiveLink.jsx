'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'


 
export default function ActiveLink({href, children}) {
    return(
  <Link href={href}>{children}</Link>
    )
}
