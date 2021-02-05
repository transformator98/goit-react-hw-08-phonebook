import { NavLink } from 'react-router-dom';
import s from './AuthNavigation.module.css';

const AuthNavigation = () => {
  return (
    <nav>
      <NavLink to="/register" activeClassName={s.activeLink} className={s.link}>
        Sign Up
      </NavLink>
      <NavLink to="/login" activeClassName={s.activeLink} className={s.link}>
        Sign In
      </NavLink>
    </nav>
  );
};
export default AuthNavigation;
