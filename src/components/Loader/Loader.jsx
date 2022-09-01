import { Circles } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Circles color="blue" height={100} width={1000} />
    </div>
  );
};

export default Loader;
