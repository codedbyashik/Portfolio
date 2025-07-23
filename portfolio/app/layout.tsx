import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'



export const metadata = {
  title: 'Ashik Portfolio',
  description: 'This is my portfolio app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <body className='bg-gray-100 dark:bg-gray-900 overflow-x-hidden'>
        
        <Header />
        {children}
        <Faq />
        <Footer />
        
        </body>
    </html>
  )
}
