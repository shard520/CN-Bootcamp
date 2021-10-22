import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Numbers = ({ updateDisplay }) => {
  return (
    <Box
      sx={{
        gridColumn: { sm: '1 / span 1' },
        mr: { sm: 2 },
        mb: { xs: 2, sm: 'unset' },
        display: 'grid',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}
    >
      <Button data-value="1" variant="outlined" onClick={updateDisplay}>
        1
      </Button>
      <Button data-value="2" variant="outlined" onClick={updateDisplay}>
        2
      </Button>
      <Button data-value="3" variant="outlined" onClick={updateDisplay}>
        3
      </Button>
      <Button data-value="4" variant="outlined" onClick={updateDisplay}>
        4
      </Button>
      <Button data-value="5" variant="outlined" onClick={updateDisplay}>
        5
      </Button>
      <Button data-value="6" variant="outlined" onClick={updateDisplay}>
        6
      </Button>
      <Button data-value="7" variant="outlined" onClick={updateDisplay}>
        7
      </Button>
      <Button data-value="8" variant="outlined" onClick={updateDisplay}>
        8
      </Button>
      <Button data-value="9" variant="outlined" onClick={updateDisplay}>
        9
      </Button>
      <Button
        sx={{ gridColumn: '1 / span 2' }}
        data-value="0"
        variant="outlined"
        onClick={updateDisplay}
      >
        0
      </Button>
      <Button data-value="." variant="outlined" onClick={updateDisplay}>
        .
      </Button>
    </Box>
  );
};

export default Numbers;
