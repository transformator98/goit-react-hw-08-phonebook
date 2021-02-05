import AuthNavigation from 'component/AuthNavigation/AuthNavigation';
import Navigation from 'component/Navigation';
import AuthNav from 'component/AuthNavigation';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
