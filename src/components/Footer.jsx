export const Footer = () => {
    return (
        <footer className="
            flex flex-col
            gap-2
            border-t border-t-[#FFFFFF0A] border-solid
            py-5 px-4 md:px-6 md:pt-8 lg:pt-20 lg:pb-10
            md:flex-row md:justify-between md:items-center
            ">
            <div className="
                flex items-center justify-center
                gap-1 md:gap-2">
                <img
                    className="
                    w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6
                    rounded-sm md:rounded-md
                    "
                    src="images/logo.png" alt="logo" />
                <span
                    className="
                    text-sm md:text-base lg:text-xl xl:text-2xl
                    font-extrabold
                    uppercase
                    tracking-tight
                    align-middle
                    ">Nexus</span>
            </div>
            <p className="
                font-normal
                text-xs md:text-sm
                align-middle
                text-center
                text-[#8A98A6]
                ">
                © 2025 Nexus Creative Agency. All rights reserved.
            </p>
            <ul className="
                flex gap-6
                text-sm font-medium
                justify-center">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Dribble</li>
            </ul>
        </footer>
    )
}