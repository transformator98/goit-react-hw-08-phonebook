import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Navigation.module.css';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" activeClassName={s.activeLink} className={s.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contact"
          activeClassName={s.activeLink}
          className={s.link}
        >
          Contact
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
