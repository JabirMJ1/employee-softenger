'use client'

import Navbar from '@/components/Navbar'
import Table from '@/components/Table'
import TabsComponent from '@/components/TabsComponent'
import Title from '@/components/Title'
import { FIELDS, PLACEHOLDER_IMAGE, TABLE_HEADERS } from '@/constants'
import { useEmployeeStore } from '@/store/zustand'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function EditManage() {
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
      
      <div className="grid grid-cols-3 gap-3">
        {
          employees && Object.keys(employees).length > 0 && 
          Object.values(employees).map((employee, key) => {
            return (
              <Link key={key} href={`edit/${employee[FIELDS.ID]}`} className="border rounded p-2">
                <div className="flex gap-2 items-center">
                  <div className={`p-1 rounded px-2 text-xs w-max`}>
                    <div className="relative block w-12 aspect-square rounded-full overflow-hidden">
                        <Image 
                        src={employee?.[FIELDS.PROFILE_IMAGE] ?? PLACEHOLDER_IMAGE}
                        alt="Preview" 
                        className="object-cover"
                        width={50}
                        height={50}
                        />
                    </div>
                </div>

                <div>
                  <p className="font-semibold">{employee[FIELDS.NAME]}</p>
                  <p className="text-xs">{employee[FIELDS.ID]}</p>
                </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}
