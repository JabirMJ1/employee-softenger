'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import TabsComponent from '@/components/TabsComponent'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { useEmployeeStore } from '@/store/zustand'
import LocalStorageManager from '@/helpers/LocalStorageManager'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {employees, setEmployees} = useEmployeeStore()

  useEffect(() => {
    if(employees !== null) return

    setEmployees(LocalStorageManager.getEmployees())
  }, [])

  useEffect(() => {
    if(employees === null) return
    LocalStorageManager.setEmployees(employees)
  }, [employees])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen pt-14 max-w-7xl m-auto">

        <Navbar/>
          <div className="z-10 max-w-5xl pt-10  m-auto w-full font-mono text-sm">
            <TabsComponent/>
            {children}
          </div>  
        </div>
      <ToastContainer />
      <div id="dropdown-portal" ></div>
      </body>
    </html>
  )
}
