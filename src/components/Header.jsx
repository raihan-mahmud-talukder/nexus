export const Header = () => {
    return (
        <header>
            <nav>
                <img src="images/logo.png" alt="logo" />
                <span>Nexus</span>
            </nav>
            {/* <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label> */}
            <menu>
                <ul>
                    <li>Work</li>
                    <li>Studio</li>
                    <li>Services</li>
                    <li>Insights</li>
                </ul>
            </menu>
            <button>
                <a href="">Let's Talk</a>
            </button>
        </header>
    )
}