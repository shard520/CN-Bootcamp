const PageSelect = ({ handlePageSelect }) => {
  return (
    <>
      <label htmlFor="pageSelect">Choose a Page:</label>
      <button onClick={e => handlePageSelect(e)} value="home">
        Page 1
      </button>
      <button onClick={e => handlePageSelect(e)} value="prev">
        Previous Page
      </button>
      <button onClick={e => handlePageSelect(e)} value="next">
        Next Page
      </button>
    </>
  );
};

export default PageSelect;
