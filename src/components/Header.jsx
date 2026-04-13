export const Header = () => {
    return (
        <header className="
            rounded-2xl border border-[#FFFFFF0D]
            backdrop-blur-lg bg-[#0F142066] py-4 px-8
            flex justify-between items-center
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
            {/* <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label> */}
            <menu>
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
                <a className="
                    font-semibold text-sm
                " href="">Let's Talk</a>
            </button>
        </header>
    )
}