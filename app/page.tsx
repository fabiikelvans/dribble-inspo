import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Groskil from "@/app/header/groskil";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main style={inter.style}>
       <Groskil/>

   </main>
  )
}
