export const Footer = () => {
    return (
        <footer className="w-full">
            <div className="flex items-center gap-2">
                <img
                    className="w-6 h-6 rounded-md"
                    src="images/logo.png" alt="logo" />
                <span
                    className="
                    text-2xl
                    font-extrabold
                    uppercase
                    tracking-tight
                    align-middle
                    ">Nexus</span>
            </div>
            <p>
                © 2025 Nexus Creative Agency. All rights reserved.
            </p>
            <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Dribble</li>
            </ul>
        </footer>
    )
}