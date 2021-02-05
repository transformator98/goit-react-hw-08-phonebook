import s from './Wrapper.module.css';

export default function Wrapper({ children }) {
  return <div className={s.container}>{children}</div>;
}
