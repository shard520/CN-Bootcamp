const ToDoItems = props => {
  return (
    <div className="items__item">
      <p>{props.item}</p>
      <button onClick={props.delete}>X</button>
    </div>
  );
};

export default ToDoItems;
