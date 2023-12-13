import { Link } from 'react-router-dom'
import './globals.css'
import { Navbar } from './components/Navbar/Navbar'

export const metadata = {
  title: 'Moz Aluga',
  description: 'Sistema de alugar casas'
}

export default function RootLayout({ children }){
  return (
    <>
    <Navbar/>
    </>
  )
}
