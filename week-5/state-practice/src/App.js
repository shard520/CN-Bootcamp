import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState([1, 2, 3]);
  const [value, setValue] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handleAddNum = () => {
    const storedNums = [...nums];
    storedNums.push(storedNums[storedNums.length - 1] + 1);
    setNums(storedNums);
  };

  const handleDeleteNum = index => {
    console.log(index);

    const storedNums = [...nums];
    storedNums.splice(index, 1);
    setNums(storedNums);
  };

  const handleInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setSubmittedText(value);
    setValue('');
  };

  return (
    <div className="App">
      <Counter count={count} add={handleAdd} subtract={handleMinus} />
      <NumList
        numbers={nums}
        addNum={handleAddNum}
        deleteNum={handleDeleteNum}
      />
      <Input
        val={value}
        update={handleInputChange}
        submit={handleSubmit}
        text={submittedText}
      />
    </div>
  );
}

const Counter = ({ count, add, subtract }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={add}>Add One</button>
      <button onClick={subtract}>Minus One</button>
    </div>
  );
};

const NumList = ({ numbers, addNum, deleteNum }) => {
  return (
    <div>
      <p>
        {numbers.map((num, i) => {
          return (
            <span onClick={() => deleteNum(i)} key={i}>
              {num}{' '}
            </span>
          );
        })}
      </p>
      <button onClick={addNum}>Add another number</button>
    </div>
  );
};

const Input = ({ val, update, submit, text }) => {
  return (
    <div>
      <input type="text" value={val} onChange={update} />
      <button onClick={submit}>Submit</button>
      <p>You have submitted: {text}</p>
    </div>
  );
};

export default App;
