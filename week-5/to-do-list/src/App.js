import { useState } from 'react';
import { CssBaseline, Typography } from '@mui/material/';
import './App.css';

import AddItem from './components/AddItem';
import ToDoItems from './components/ToDoItems';

function App() {
  const [item, setItem] = useState('');
  const [itemsList, setItemsList] = useState([]);

  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = () => {
    const arr = [...itemsList];
    arr.push(item);
    setItemsList(arr);
  };

  const handleDelete = e => {
    const id = e.target.id;
    const items = [...itemsList];
    items.splice(id, 1);
    setItemsList(items);
  };

  return (
    <div className="app">
      <CssBaseline />

      <Typography variant="h1" sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
        To Do List
      </Typography>

      <AddItem value={item} setValue={handleChange} submit={handleSubmit} />
      <div className="items">
        {itemsList.map((item, i) => {
          return <ToDoItems key={i} id={i} item={item} delete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default App;
