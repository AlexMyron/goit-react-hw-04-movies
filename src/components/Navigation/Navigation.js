import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navMenu}>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.navLink_active}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={s.navLink}
        activeClassName={s.navLink_active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
