const SolSelect = ({ handleSolSelect, solValue }) => {
  let maxSol = 1;

  return (
    <div className="input__item">
      <label htmlFor="solSelect">
        Select Sol, max sol for this rover is: {maxSol}
      </label>
      <input value={solValue} onChange={handleSolSelect} type="text" />
    </div>
  );
};

export default SolSelect;
