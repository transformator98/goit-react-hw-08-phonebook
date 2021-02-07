import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={s.container}>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/763/763704.svg"
        alt=""
        width="32"
        className={s.avatar}
      />

      <span className={s.name}>Добро пожаловать, {name}!</span>

      <button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <svg
          className={s.exit}
          height="24"
          viewBox="0 0 512 512"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m480.971 239.029-90.51-90.509a24 24 0 0 0 -33.942 0 24 24 0 0 0 0 33.941l49.54 49.539h-262.059a24 24 0 0 0 -24 24 24 24 0 0 0 24 24h262.059l-49.54 49.539a24 24 0 0 0 33.942 33.941l90.51-90.51a24 24 0 0 0 0-33.941z" />
          <path d="m304 392a24 24 0 0 0 -24 24v24h-208v-368h208v24a24 24 0 0 0 48 0v-32a40 40 0 0 0 -40-40h-224a40 40 0 0 0 -40 40v384a40 40 0 0 0 40 40h224a40 40 0 0 0 40-40v-32a24 24 0 0 0 -24-24z" />
        </svg>
        <span className={s.label}>Exit</span>
      </button>
    </div>
  );
};

export default UserMenu;
