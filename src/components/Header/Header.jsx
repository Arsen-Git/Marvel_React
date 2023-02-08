import "./Header.scss";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <h1 className="header__title">
          <span className="active">Marvel</span> information portal
        </h1>
      </div>
      <ul className="header__menu">
        <NavLink
          end
          to={"/"}
          style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })}
        >
          <li className="header__menu__item active">Characters</li>
        </NavLink>
        <span>/</span>
        <NavLink
          end
          to={"/comics"}
          style={({ isActive }) => ({ color: isActive ? "#9f0013" : "black" })}
        >
          <li className="header__menu__item">Comics</li>
        </NavLink>
      </ul>
    </header>
  );
}
