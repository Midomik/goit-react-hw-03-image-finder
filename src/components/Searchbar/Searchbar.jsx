import css from './Searchbar.module.css';
export const Searchbar = ({ getQuery }) => {
  const getInputValue = e => {
    e.preventDefault();
    getQuery(e.currentTarget.elements.searchInput.value);
  };
  return (
    <header className={css.Searchbar}>
      <form onSubmit={getInputValue} className={css.SearchForm}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>🔍</span>
        </button>

        <input
          name="searchInput"
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
