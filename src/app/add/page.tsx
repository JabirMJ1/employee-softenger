'use client'

import FillButton from '@/components/Buttons/FillButton'
import ImageField from '@/components/Fields/ImageField'
import NumberField from '@/components/Fields/NumberField'
import TextField from '@/components/Fields/TextField'
import Navbar from '@/components/Navbar'
import TabsComponent from '@/components/TabsComponent'
import Title from '@/components/Title'
import { FIELDS, TABS } from '@/constants'
import { useEmployeeStore } from '@/store/zustand'
import { TEmployee, TEmployeeWithoutId } from '@/types/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

interface TEmployeeState {
    name?: string,
    age?: number,
    salary?: number,
    profile_image?: string,
}

export default function AddPage() {
    const [employee, setEmployee] = useState<TEmployeeState|null>(null)
    const router = useRouter()

    const { add } = useEmployeeStore()

    const handleChange = (key: string, value: string|number) => {
        setEmployee((prev) => ({...prev, [key]: value}))
    }
    
    const handleSubmit = () => {
        if(!employee?.[FIELDS.NAME]) return toast.error("Please fill your name")
        if(!employee?.[FIELDS.AGE]) return toast.error("Please fill your age")
        if(!employee?.[FIELDS.SALARY]) return toast.error("Please fill your salary")
        if(!employee?.[FIELDS.PROFILE_IMAGE]) return toast.error("Please select a profile image")

        add(employee as TEmployeeWithoutId)
        router.push(TABS.VIEW)
    }

    return (
        <main className="min-h-screen max-w-7xl m-auto">
            <form className="space-y-3"> 
                <Title title = "Add Employee"/>
                <TextField
                    name="Name"
                    value=""
                    onChange={(value) => handleChange(FIELDS.NAME, value)}
                    required={!employee?.[FIELDS.NAME] || employee?.[FIELDS.NAME] === ""}
                    maxLength={50}
                    minLength={3}
                />
                <NumberField
                    name="Age"
                    value={employee?.[FIELDS.AGE]}
                    onChange={(value) => handleChange(FIELDS.AGE, value)}
                    required={!employee?.[FIELDS.AGE]}
                    min={18}
                    max={80}
                />
                <NumberField
                    name="Salary"
                    value={employee?.[FIELDS.SALARY]}
                    onChange={(value) => handleChange(FIELDS.SALARY, value)}
                    required={!employee?.[FIELDS.SALARY]}
                    min={500}
                />
                <ImageField
                    name="Profile Image"
                    value={employee?.[FIELDS.PROFILE_IMAGE]}
                    onChange={(value) => handleChange(FIELDS.PROFILE_IMAGE, value)}
                    required={!employee?.[FIELDS.PROFILE_IMAGE]}
                />
                <FillButton type="button" onClick={() => handleSubmit()}>Add Employee</FillButton>
            </form>
        </main>
    )
}
