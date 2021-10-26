const RoverSelect = ({ handleRoverSelect }) => {
  return (
    <div className="input__item">
      <label htmlFor="roverSelect">Choose a rover:</label>
      <select onChange={handleRoverSelect} name="rover" id="roverSelect">
        <option value="curiosity">Curiosity</option>
        <option value="perseverance">Perseverance</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  );
};

export default RoverSelect;
