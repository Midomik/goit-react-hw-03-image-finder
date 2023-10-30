import css from './Button.module.css';
export const Button = ({ load }) => {
  const onClick = () => {
    load();
  };
  return (
    <button onClick={onClick} className={css.load_more_button}>
      Load More
    </button>
  );
};
