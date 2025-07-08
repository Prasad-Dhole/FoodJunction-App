import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Fixed: Object destructuring

    return (
        <div className="header-container">
            <div className={`header ${theme}`}>
                <div>
                    <img
                        className="logo"
                        src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
                        alt="logo"
                    />
                </div>
                <div className="nav-bar">
                    <div className="nav1">Dining Out</div>
                    <div className="nav2">Night Life</div>
                    <div className="nav3">About Us</div>
                    <div className="nav4">Contact Us</div>
                    <div className="theme-toggle" onClick={toggleTheme}>
                        {theme === "dark" ? "☀️" : "🌙"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;