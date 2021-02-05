import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const onLoader = () => {
  return (
    <Loader
      className="loader"
      type="Audio"
      color="#464646"
      height={40}
      width={40}
      timeout={3000} //3 secs
    />
  );
};

export default onLoader;
