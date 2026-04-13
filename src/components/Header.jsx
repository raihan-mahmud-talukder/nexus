import { useState } from "react"

export const Header = () => {
    const [navbar, setNavbar] = useState(false)
    return (
        <header className="
            rounded-2xl border border-[#FFFFFF0D]
            backdrop-blur-lg bg-[#0F142066] py-4 px-8
            flex flex-col items-center md:flex-row
            md:justify-between md:items-center
        ">
            <nav className="
                flex justify-between items-center gap-2
            ">
                <img
                    className="w-8 h-8"
                    src="images/logo.png" alt="logo" />
                <span className="
                    font-extrabold text-xl
                    tracking-tight uppercase
                ">Nexus</span>
            </nav>
            <button
                className=" m-2 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden"
                onClick={() => setNavbar(!navbar)}
            >
                {navbar ? (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
            <menu
                className={`
                pb-3 m-4
                ${navbar ? "block md:hidden" : "hidden md:hidden"}`}
            >
                <ul className="
                items-center justify-center gap-2
                font-medium text-sm text-center flex flex-col
                ">
                    <li>Work</li>
                    <li>Studio</li>
                    <li>Services</li>
                    <li>Insights</li>
                </ul>
            </menu>
            <menu className="hidden md:block">
                <ul className="
                    flex justify-between items-center gap-6
                    font-medium text-sm
                ">
                    <li>Work</li>
                    <li>Studio</li>
                    <li>Services</li>
                    <li>Insights</li>
                </ul>
            </menu>
            <button className="
                w-28 h-12 rounded-2xl backdrop-blur py-3 px-5
                 border border-[#FFFFFF1A] bg-[#0b0b10]
            ">
                <a
                    className="font-semibold text-sm"
                    href="/">Let's Talk</a>
            </button>
        </header>
    )
}