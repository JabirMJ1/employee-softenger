'use client'

import { useAppContext } from "@/contexts/AppContext"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="flex w-full border-b">
            <div className="max-w-navbar m-auto py-2.5 px-3 flex space-x-5 items-center">
                <Link
                    href = '/'
                >
                    <h1 className="text-lg">
                        Soft<span className="text-primary font-bold">Enger</span>
                    </h1>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar