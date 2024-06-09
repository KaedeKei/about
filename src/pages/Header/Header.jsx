import './Header.css';
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>        
            <Link to="/" class="nav-link">
                Главная страница
            </Link>
            <Link to="/about" class="nav-link">
                Обо мне
            </Link>
            <Link to="/contacts" class="nav-link">
                Контакты
            </Link>
        </>
    );
};

const Header = () => {
    return (
        <header className="sticky-top bg-dark">
            <div className="container d-flex justify-content-between ">
                <img src={logo} width="50px" alt="logo" />
                <nav className="d-flex justify-content-between w-50">
                    <Menu />
                </nav>
            </div>
        </header>
    );
};

export default Header;
