export const Footer = () => {
    return (
        <footer className="
            flex flex-col
            gap-2
            justify-center
            border-t border-t-[#FFFFFF0A] border-solid
            pt-5 pb-5 px-4
            ">
            <div className="
                flex items-center gap-1
                justify-center">
                <img
                    className="w-4 h-4 rounded-sm"
                    src="images/logo.png" alt="logo" />
                <span
                    className="
                    text-sm
                    font-extrabold
                    uppercase
                    tracking-tight
                    align-middle
                    ">Nexus</span>
            </div>
            <p className="
                font-normal
                text-xs
                align-middle
                text-center
                text-[#8A98A6]">
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