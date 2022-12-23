import { memo } from 'react';
import {
  IoMoonSharp,
  IoSunny
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useTheme, themes, useThemeColors } from "../contexts/Theme.context";
import logo from './images/cervelo_logo-2000x600.png';
import AuthenticationButton from './authentication/AuthenticationButton';

const NavItem = ({ label, to }) => {
  const { oppositeTheme } = useThemeColors();

  return (
    <li className="nav-item">
      <b>
      <Link
        to={to}
        className={`nav-link active text-${oppositeTheme}`}
      >
        {label}
      </Link>
      </b>
    </li>
  );
};

export default memo(function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg bg-${theme} mb-4 `} >
      <img src={logo} name="logo" width="140" height="40" ></img>&nbsp;&nbsp;&nbsp;
      <div  className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse" id="navbar">
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <h5><NavItem label="Fietsen" to="/" /></h5>&nbsp;&nbsp;&nbsp;
            <h5><NavItem label="Fiets toevoegen" to="/fietsen" /></h5>

              {/* <NavItem label="Registreren" to="/Registratie"/>
              <NavItem label="Login" to="/Login"/> */}
          </ul>
          <div className="d-flex"  >
            <AuthenticationButton />&nbsp;&nbsp;&nbsp;
            <button className="btn btn-outline-success" type="button" onClick={toggleTheme} style={{height: 45}}>
                {
                    theme === themes.dark ? <IoMoonSharp /> : <IoSunny />
                }
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
})