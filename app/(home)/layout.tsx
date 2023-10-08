import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import { AuthProvider } from './Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instagram',
  description: 'Generated by create next app',
}

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body>
          <div className='grid grid-cols-12'>
              <div className='col-span-2'>
                  <Navbar />
              </div>
              <div className='col-span-10'>
                <AuthProvider>
                  {children}
                </AuthProvider>
              </div>
          </div>
        </body>
      </html>
    )
}
