import { Button, TextField } from '@mui/material';

const AddItem = props => {
  return (
    <div className="add-item">
      <TextField
        className="text-input"
        value={props.item}
        onChange={e => props.setValue(e)}
        type="text"
      />
      <Button variant="outlined" onClick={props.submit}>
        Add Item
      </Button>
    </div>
  );
};

export default AddItem;
