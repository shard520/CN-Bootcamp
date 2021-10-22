import { Box } from '@mui/system';
import Numbers from './Numbers';
import Operators from './Operators';

const Controls = ({ updateDisplay, equalsClick }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        width: '60%',
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <Numbers updateDisplay={updateDisplay} />
      <Operators updateDisplay={updateDisplay} equalsClick={equalsClick} />
    </Box>
  );
};

export default Controls;
