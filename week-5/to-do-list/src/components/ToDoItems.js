import { Box, Button, Typography } from '@mui/material';
import { HighlightOff } from '@mui/icons-material/';
const ToDoItems = props => {
  return (
    <Box sx={{ m: 2 }} className="items__item">
      <Typography
        sx={{
          border: 1,
          borderColor: 'primary.main',
          borderRadius: 1,
          mr: 1,
          p: 1,
          bgcolor: '#fff',
          padding: '16.5px 14px',
        }}
        variant="paragraph"
        className="items__text"
      >
        {props.item}
      </Typography>
      <Button variant="contained" onClick={props.delete}>
        <HighlightOff sx={{ fontSize: 40 }} />
      </Button>
    </Box>
  );
};

export default ToDoItems;
