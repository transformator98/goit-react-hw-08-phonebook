import s from './stylesView.module.css';

const LoginView = () => {
  return (
    <>
      {/* TODO залогинится */}

      <form className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            placeholder="Email"
            name="name"
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            placeholder="Password"
            name="name"
          />
        </label>
      </form>
    </>
  );
};
export default LoginView;
