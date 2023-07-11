import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
      <nav className="border-b border-green-800 pt-5 pb-5 flex items-center justify-evenly">
       <button> <Link  href="/" className="text-white hover:text-yellow-200 ">Home</Link></button>
        <button><Link href="/aboutUs" className="text-white hover:text-yellow-200">About us</Link></button>
        <button><Link href="/pruebaDaniel" className="text-white hover:text-yellow-200">Prueba Daniel</Link></button>
      </nav>
      {children}</body>
    </html>
  )
}
