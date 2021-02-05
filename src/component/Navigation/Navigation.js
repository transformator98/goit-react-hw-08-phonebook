import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName={s.activeLink} className={s.link}>
        Home
      </NavLink>
      <NavLink to="/contact" activeClassName={s.activeLink} className={s.link}>
        Contact
      </NavLink>
      <NavLink to="/register" activeClassName={s.activeLink} className={s.link}>
        Register
      </NavLink>
      <NavLink to="/login" activeClassName={s.activeLink} className={s.link}>
        Login
      </NavLink>
    </nav>
  );
};
export default Navigation;
