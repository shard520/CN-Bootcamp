import { Box } from '@mui/system';
import Numbers from './Numbers';
import Operators from './Operators';

const Controls = ({ updateDisplay, equalsClick, reset, cancelEntry }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        width: '60%',
        ml: 'auto',
        mr: 'auto',
      }}
    >
      <Numbers updateDisplay={updateDisplay} />
      <Operators
        updateDisplay={updateDisplay}
        equalsClick={equalsClick}
        reset={reset}
        cancelEntry={cancelEntry}
      />
    </Box>
  );
};

export default Controls;
