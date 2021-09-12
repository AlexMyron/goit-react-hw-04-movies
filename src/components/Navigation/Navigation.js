import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        exact
        className={s.navLink}
        activeClassName={s.activeLInk}
        to="./"
      >
        Главная
      </NavLink>
      <NavLink
        className={s.navLink}
        activeClassName={s.activeLInk}
        to="./authors"
      >
        Авторы
      </NavLink>
      <NavLink
        className={s.navLink}
        activeClassName={s.activeLInk}
        to="./books"
      >
        Книги
      </NavLink>
    </nav>
  );
};

export default Navigation;
