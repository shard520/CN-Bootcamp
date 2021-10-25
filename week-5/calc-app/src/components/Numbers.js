import { Button, SvgIcon } from '@mui/material';
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
      <Button data-value="plusMinus" variant="outlined" onClick={updateDisplay}>
        <SvgIcon fontSize="inherit">
          <path d="M13.241 18.68c-0.686 0-1.242 0.556-1.242 1.241s0.556 1.242 1.242 1.242h9.517c0.686 0 1.242-0.556 1.242-1.242s-0.556-1.241-1.242-1.241h-9.517z"></path>
          <path d="M0 7.508c0 0.686 0.556 1.241 1.242 1.241h3.31v3.311c0 0.686 0.556 1.242 1.241 1.242s1.242-0.556 1.242-1.242v-3.311h3.724c0.686 0 1.241-0.556 1.241-1.241s-0.556-1.242-1.241-1.242h-3.724v-4.138c0-0.686-0.556-1.241-1.242-1.241s-1.241 0.556-1.241 1.241v4.138h-3.31c-0.686 0-1.241 0.556-1.241 1.242z"></path>
          <path d="M22.324 2.932c-0.485-0.485-1.271-0.485-1.756 0l-18.061 18.062c-0.485 0.485-0.485 1.271 0 1.755 0.242 0.243 0.56 0.364 0.878 0.364s0.636-0.121 0.878-0.364l18.061-18.061c0.485-0.485 0.485-1.271 0-1.756z"></path>
        </SvgIcon>
      </Button>
      <Button data-value="0" variant="outlined" onClick={updateDisplay}>
        0
      </Button>
      <Button data-value="." variant="outlined" onClick={updateDisplay}>
        .
      </Button>
    </Box>
  );
};

export default Numbers;
