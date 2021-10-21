import { useState } from 'react';
import { create, all } from 'mathjs';
import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

import './App.css';

import Numbers from './components/Numbers';
import Display from './components/Display';

const math = create(all);

const appTheme = createTheme({
  typography: {
    fontSize: 24,
  },
});

function App() {
  const [displayNum, setDisplayNum] = useState('0');

  const handleNumClick = e => {
    const num = e.target.innerText;
    let newNum = displayNum + num;

    // remove leading 0
    if (newNum[0] === '0') newNum = newNum.substring(1);
    setDisplayNum(newNum);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Box className="app">
          <Box sx={{ width: '60%', ml: 'auto', mr: 'auto' }}>
            <Display displayNum={displayNum} />
            <Numbers updateDisplayNum={handleNumClick} />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
