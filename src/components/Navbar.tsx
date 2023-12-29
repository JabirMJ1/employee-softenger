import Link from "next/link"

/**
 * Static Navbar
 * @returns React.Component
 */
const Navbar = () => {
    return (
        <nav className="flex w-full border-b border-black">
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