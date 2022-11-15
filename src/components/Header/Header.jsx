import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <h1 className="header__title">
          <span className="active">Marvel</span> information portal
        </h1>
      </div>
      <ul className="header__menu">
        <li className="header__menu__item active">Characters</li>
        <span>/</span>
        <li className="header__menu__item">Comics</li>
      </ul>
    </header>
  );
}
