import "./Header.scss";
import { useContext } from "react";
import { AppContext } from "./../../context/app.context";
import { Link } from "react-router-dom";

const Header = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="header-container container">
      <h1 className="logo">
        #<span>My</span>App
      </h1>
      <ul className="menu">
        <li>
          <a href="#boxes">Oferta</a>
        </li>
        <li>
          <a href="#courses">Kursy</a>
        </li>
        {logged && (
          <li className="admin">
            <Link to="admin">Admin</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
