import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Operators = ({ updateDisplay, equalsClick }) => {
  return (
    <Box
      sx={{
        gridColumn: '2 / span 1',
        display: 'grid',
        gridTemplateColumns: '1fr',
        // width: '50%',
        // ml: 'auto',
        // mr: 'auto',
      }}
      spacing={2}
    >
      <Button data-value="+" variant="outlined" onClick={updateDisplay}>
        +
      </Button>
      <Button data-value="-" variant="outlined" onClick={updateDisplay}>
        -
      </Button>
      <Button
        data-value="*"
        sx={{ textTransform: 'none' }}
        variant="outlined"
        onClick={updateDisplay}
      >
        x
      </Button>
      <Button data-value="/" variant="outlined" onClick={updateDisplay}>
        ÷
      </Button>
      <Button data-value="=" variant="outlined" onClick={equalsClick}>
        =
      </Button>
    </Box>
  );
};

export default Operators;
