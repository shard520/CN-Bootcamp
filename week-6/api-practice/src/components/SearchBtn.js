const SearchBtn = ({ handleSearch }) => {
  return (
    <div className="input__item">
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBtn;
