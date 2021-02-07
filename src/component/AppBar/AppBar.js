import AuthNavigation from 'component/AuthNavigation/AuthNavigation';
import Navigation from 'component/Navigation';
import AuthNav from 'component/AuthNavigation';
import s from './AppBar.module.css';
import UserMenu from 'component/UserMenu';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;
