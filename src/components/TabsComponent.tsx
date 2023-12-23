'use client'

import { SetStateAction } from "react"
import BorderlessButton from "./Buttons/BorderlessButton"
import Utils from "@/helpers"
import { useEmployeeStore } from "@/store/zustand"
import { TABS } from "@/constants"

const TabsComponent = () => {
    const { switchTab, activeTab } = useEmployeeStore()

    const active = "active dark:text-primary dark:border-primary text-primary border-primary"
    const disabled = "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"

    return(
        <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 w-full">
            <ul className="flex flex-wrap text-sm font-normal text-center text-black dark:text-gray-400">
                <li className="mr-2">
                    <button 
                        type="button" 
                        onClick={!Utils.isSSR() ? () => switchTab(TABS.VIEW) : undefined} 
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${activeTab === TABS.VIEW ? active : disabled}`}>
                            View
                    </button>
                    <button 
                        type="button" 
                        onClick={!Utils.isSSR() ? () => switchTab(TABS.ADD) : undefined} 
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${activeTab === TABS.ADD ? active : disabled}`}>
                            Add
                    </button>
                    <button 
                        type="button" 
                        onClick={!Utils.isSSR() ? () => switchTab(TABS.EDIT) : undefined} 
                        className={`inline-block p-2 min-w-32 focus:outline-none border-b-2 border-transparent  ${activeTab === TABS.EDIT ? active : disabled}`}>
                            Edit
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default TabsComponent