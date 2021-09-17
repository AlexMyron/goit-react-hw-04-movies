import s from "./SearchForm.module.css";

const SearchForm = ({ onSubmit, inputValue, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={s.searchForm}>
      <input
        type="text"
        value={inputValue}
        name="search"
        onChange={onChange}
        className={s.searchInput}
      />
      <button type="button" onClick={onSubmit} className={s.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
