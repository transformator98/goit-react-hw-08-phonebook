import s from './stylesView.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
      <label className={s.label}>
        Name
        <input
          onChange={handleChange}
          className={s.input}
          value={name}
          type="text"
          name="name"
          placeholder="Name"
        />
      </label>
      <label className={s.label}>
        Email
        <input
          onChange={handleChange}
          className={s.input}
          value={email}
          type="email"
          placeholder="Email"
          name="email"
        />
      </label>
      <label className={s.label}>
        Password
        <input
          onChange={handleChange}
          className={s.input}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
        />
      </label>
      <button type="submit"> Register</button>
    </form>
  );
};
export default RegisterView;
