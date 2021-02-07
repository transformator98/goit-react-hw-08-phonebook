import { useSelector } from 'react-redux';
import Navigation from 'component/Navigation';
import AuthNav from 'component/AuthNavigation';
import UserMenu from 'component/UserMenu';
import { authSelectors } from 'redux/auth';

import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
