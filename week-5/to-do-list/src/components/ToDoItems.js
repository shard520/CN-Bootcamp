import { Box, Button, Typography } from '@mui/material';

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
        }}
        variant="paragraph"
        className="items__text"
      >
        {props.item}
      </Typography>
      <Button variant="contained" onClick={props.delete}>
        X
      </Button>
    </Box>
  );
};

export default ToDoItems;
