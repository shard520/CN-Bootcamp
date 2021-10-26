const PageSelect = ({ handlePageSelect }) => {
  return (
    <div className="input__item">
      <label htmlFor="pageSelect">Choose a Page:</label>
      <button onClick={handlePageSelect} value="home">
        Page 1
      </button>
      <button onClick={handlePageSelect} value="prev">
        Previous Page
      </button>
      <button onClick={handlePageSelect} value="next">
        Next Page
      </button>
    </div>
  );
};

export default PageSelect;
