import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Operators = ({ updateDisplay, equalsClick, reset, cancelEntry }) => {
  return (
    <Box
      sx={{
        gridColumn: '2 / span 1',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        // width: '50%',
        // ml: 'auto',
        // mr: 'auto',
      }}
      spacing={2}
    >
      <Button
        sx={{ gridColumn: '1 / span 1' }}
        data-value="+"
        variant="outlined"
        onClick={updateDisplay}
      >
        +
      </Button>
      <Button
        sx={{ gridColumn: '1 / span 1' }}
        data-value="-"
        variant="outlined"
        onClick={updateDisplay}
      >
        -
      </Button>
      <Button
        sx={{ textTransform: 'none', gridColumn: '1 / span 1' }}
        data-value="*"
        variant="outlined"
        onClick={updateDisplay}
      >
        x
      </Button>
      <Button
        sx={{ gridColumn: '1 / span 1' }}
        data-value="/"
        variant="outlined"
        onClick={updateDisplay}
      >
        ÷
      </Button>

      <Button
        sx={{ gridColumn: '2 / span 1', gridRow: '1 / span 1' }}
        variant="outlined"
        onClick={reset}
      >
        C
      </Button>
      <Button
        sx={{ gridColumn: '2 / span 1', gridRow: '2 / span 1' }}
        variant="outlined"
        onClick={cancelEntry}
      >
        CE
      </Button>
      <Button
        sx={{ gridColumn: '2 / span 1', gridRow: '3 / span 2' }}
        data-value="="
        variant="outlined"
        onClick={equalsClick}
      >
        =
      </Button>
    </Box>
  );
};

export default Operators;
