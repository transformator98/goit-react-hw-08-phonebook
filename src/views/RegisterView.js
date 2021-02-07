import s from './stylesView.module.css';

const RegisterView = () => {
  return (
    <>
      {/* TODO регистрация */}

      <form className={s.form} autoComplete="off">
        <labe className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            placeholder="Name"
            name="name"
          />
        </labe>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            placeholder="Email"
            name="email"
          />
        </label>
        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            placeholder="Password"
            name="password"
          />
        </label>
      </form>
    </>
  );
};
export default RegisterView;
