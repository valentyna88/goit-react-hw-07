import { Bars } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Bars
      height="100"
      width="100"
      color="DodgerBlue"
      ariaLabel="bars-loading"
      wrapperClass={css.loader}
      visible={true}
    />
  );
};

export default Loader;
