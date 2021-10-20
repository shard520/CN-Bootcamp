const AddItem = props => {
  return (
    <div className="add-item">
      <input value={props.item} onChange={e => props.setValue(e)} type="text" />
      <button onClick={props.submit}>Submit</button>
    </div>
  );
};

export default AddItem;
