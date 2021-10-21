import { Button, TextField } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material/';

const AddItem = props => {
  return (
    <div className="add-item">
      <TextField
        className="text-input"
        value={props.value}
        onChange={e => props.setValue(e)}
        type="text"
        sx={{ bgcolor: '#fff' }}
      />
      <Button
        variant="outlined"
        sx={{ bgcolor: '#fff' }}
        onClick={props.submit}
      >
        <AddCircleOutline sx={{ fontSize: 40 }} />
      </Button>
    </div>
  );
};

export default AddItem;
