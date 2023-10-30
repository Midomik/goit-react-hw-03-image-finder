import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader_container}>
      <InfinitySpin width="200" color="#000" />;
    </div>
  );
};
