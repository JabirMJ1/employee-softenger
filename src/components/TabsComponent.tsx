'use client'

import { SetStateAction } from "react"
import BorderlessButton from "./Buttons/BorderlessButton"
import Utils from "@/helpers"
import { useEmployeeStore } from "@/store/zustand"
import { TABS } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const TabsComponent = () => {
    const path = usePathname() 

    const active = "active dark:text-primary dark:border-primary text-primary border-primary"
    const disabled = "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"

    return(
        <div className="flex justify-between border-b border-gray-200 w-full">
            <ul className="flex flex-wrap text-sm font-normal text-center text-black dark:text-gray-400">
                <li className="mr-2">
                    <Link 
                        href={TABS.VIEW}
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${path === TABS.VIEW ? active : disabled}`}>
                            View
                    </Link>
                    <Link 
                        href={TABS.ADD}
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${path === TABS.ADD ? active : disabled}`}>
                            Add
                    </Link>
                    <Link 
                        href={TABS.EDIT}
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${path.includes(TABS.EDIT) ? active : disabled}`}>
                            Edit
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default TabsComponent