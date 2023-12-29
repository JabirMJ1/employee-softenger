'use client'

import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import TabsComponent from '@/components/TabsComponent'
import Title from '@/components/Title'
import { TABLE_HEADERS } from '@/constants'
import { useEmployeeStore } from '@/store/zustand'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function Home() {
  const {employees, remove} = useEmployeeStore()
  const router = useRouter()

  const dropdownOptions = (item: any) => {
    return [
        {
            label: 'Edit',
            callbackFunction: () => {
              if(!item.id) return toast.warn("Id not found")
              router.push("/edit/" + item.id)
            }
        },
        {
            label: 'Delete',
            callbackFunction: () => {
              if(!item.id) return toast.warn("Id not found")
              remove(item.id)
            }
        }
    ]
}

  return (
    <main className="min-h-screen max-w-7xl m-auto">
      <Title title = "View Employees"/>
      
      <Table
        columns={TABLE_HEADERS}
        data={employees ? Object.values(employees) : []}
        dataCallback = {(item) => item}
        totalRecords={employees ? Object.values(employees).length : 0}
        options= {{
            dropDownCallback: dropdownOptions,
            footer: true,
            pagination: "manual",
            height: "490px",
            striped: true,
        }}
      />
    </main>
  )
}
