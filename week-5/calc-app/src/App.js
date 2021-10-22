import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

import './App.css';

import Display from './components/Display';
import Controls from './components/Controls';

const appTheme = createTheme({
  typography: {
    fontSize: 24,
  },
});

function App() {
  const [displayNum, setDisplayNum] = useState('0');

  const handleClick = e => {
    const char = e.target.dataset.value;

    let newNum = displayNum + char;

    if (String(newNum).includes('error')) {
      newNum = newNum.replace('error', '');
    }

    // remove leading 0
    if (newNum[0] === '0' && newNum[1] !== '.') newNum = newNum.substring(1);
    setDisplayNum(newNum);
  };

  const handleCalc = () => {
    try {
      const result = evaluate(displayNum);
      setDisplayNum(result);
    } catch (err) {
      console.error(`💥 💥 ${err}`);
      setDisplayNum('error');
    }
  };

  const handleReset = () => {
    setDisplayNum(0);
  };

  const handleCancel = () => {
    let numStr = String(displayNum);

    numStr = numStr.slice(0, -1);

    setDisplayNum(numStr);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Box className="app">
          <Box sx={{ width: '60%', ml: 'auto', mr: 'auto' }}>
            <Display displayNum={displayNum} />
            <Controls
              updateDisplay={handleClick}
              equalsClick={handleCalc}
              reset={handleReset}
              cancelEntry={handleCancel}
            />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
