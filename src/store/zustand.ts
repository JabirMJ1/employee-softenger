import { create } from "zustand"
import {TEmployee, TEmployeeWithoutId} from '@/types/types'
import { TABS } from "@/constants"
import Utils from "@/helpers"

/**
 * handles all global state management using zustand
 */
export interface EmployeeStore {
    employees: {[x: string]: TEmployee}|null, 
    add: (employee: TEmployeeWithoutId) => void,
    edit: (employee: TEmployee) => void,
    remove: (employeeId: string) => void,
    setEmployees: (employees: {[x: string]: TEmployee}) => void,
    // activeTab: number,
    // switchTab: (tab: TABS) => void
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
    employees: null,
    add: (employee) => set((state) => {
        const id = Utils.generate_id(15)
        const employees = {...state.employees}
        employees[id] = {id, ...employee}
        
        return { employees }
    }),
    edit: (employee) => set((state) => {
        const employees = {...state.employees}
        employees[employee.id] = employee
        
        return { employees }
    }),
    remove: (employeeId) => set(state => {
        const employees = {...state.employees}
        delete employees[employeeId]
        return { employees }
    }),
    setEmployees: (employees) => set(() => {
        return { employees }
    })
    // activeTab: TABS.VIEW,
    // switchTab: (tab) => set(state => {
    //     return { activeTab: tab }
    // }),
}))