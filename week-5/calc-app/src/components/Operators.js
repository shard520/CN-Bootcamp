import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Operators = ({ updateDisplay, equalsClick, reset, cancelEntry }) => {
  return (
    <Box
      sx={{
        gridColumn: '2 / span 1',
        display: 'grid',
        gridArea: { xs: '2 / 1 / span 2 / span 1', sm: 'unset' },
        gridTemplateColumns: { xs: 'repeat(4, 1fr)', sm: '1fr 1fr' },
      }}
    >
      <Button
        sx={{ gridColumn: { sm: '1 / span 1' } }}
        data-value="+"
        variant="outlined"
        onClick={updateDisplay}
      >
        +
      </Button>
      <Button
        sx={{ gridColumn: { sm: '1 / span 1' } }}
        data-value="-"
        variant="outlined"
        onClick={updateDisplay}
      >
        -
      </Button>
      <Button
        sx={{ textTransform: 'none', gridColumn: { sm: '1 / span 1' } }}
        data-value="*"
        variant="outlined"
        onClick={updateDisplay}
      >
        x
      </Button>
      <Button
        sx={{ gridColumn: { sm: '1 / span 1' } }}
        data-value="/"
        variant="outlined"
        onClick={updateDisplay}
      >
        ÷
      </Button>
      <Button
        sx={{ gridArea: { sm: '1 / 2 / span 1 / span 1' } }}
        variant="outlined"
        onClick={reset}
      >
        C
      </Button>
      <Button
        sx={{ gridArea: { sm: '2 / 2 / span 1 / span 1' } }}
        variant="outlined"
        onClick={cancelEntry}
      >
        CE
      </Button>
      <Button
        sx={{
          gridArea: {
            xs: '2 / 3 / span 1 / span 2 ',
            sm: '3 / 2 / span 2 / span 1',
          },
        }}
        data-value="="
        variant="contained"
        disableElevation
        onClick={equalsClick}
      >
        =
      </Button>
    </Box>
  );
};

export default Operators;
