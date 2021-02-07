import s from './stylesView.module.css';

const HomeView = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome! Notebook of your contacts!
        {/* <span role="img" aria-label="Иконка приветствия">
          
        </span> */}
      </h1>
    </div>
  );
};
export default HomeView;
