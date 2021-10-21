import { Button } from '@mui/material';
import { Box } from '@mui/system';

const Numbers = ({ updateDisplayNum }) => {
  return (
    <Box
      className="numbers"
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(3, 1fr)',
        gridTemplateColumns: 'repeat(3, 1fr)',
        width: '50%',
        ml: 'auto',
        mr: 'auto',
      }}
      spacing={2}
    >
      <Button variant="outlined" onClick={updateDisplayNum}>
        1
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        2
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        3
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        4
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        5
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        6
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        7
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        8
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        9
      </Button>
      <Button variant="outlined" onClick={updateDisplayNum}>
        0
      </Button>
    </Box>
  );
};

export default Numbers;
