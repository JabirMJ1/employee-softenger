import { create } from "zustand"
import {TEmployee, TEmployeeWithoutId} from '@/types/types'
import { TABS } from "@/constants"
import Utils from "@/helpers"

export interface EmployeeStore {
    activeTab: number,
    employees: {[x: string]: TEmployee},
    add: (employee: TEmployeeWithoutId) => void,
    edit: (employee: TEmployee) => void,
    remove: (employeeId: string) => void,
    switchTab: (tab: TABS) => void
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
    activeTab: TABS.VIEW,
    employees: {},
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
    switchTab: (tab) => set(state => {
        return { activeTab: tab }
    }),
}))