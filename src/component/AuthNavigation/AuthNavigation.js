import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <nav>
      <NavLink to="/register" activeClassName={s.activeLink} className={s.link}>
        Register
      </NavLink>
      <NavLink to="/login" activeClassName={s.activeLink} className={s.link}>
        Login
      </NavLink>
    </nav>
  );
};
export default AuthNavigation;
