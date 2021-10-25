import { useState } from 'react';
import { evaluate } from 'mathjs';
import { Box, ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material';

import './App.css';

import Display from './components/Display';
import Controls from './components/Controls';
import SmallDisplay from './components/SmallDisplay';

const appTheme = createTheme({
  typography: {
    fontSize: 24,
  },
});

function App() {
  const [displayNum, setDisplayNum] = useState('0');
  const [historyArr, setHistoryArr] = useState([]);

  const operatorRegex = new RegExp(/[+]|[-]|[*]|[/]/);

  const handleClick = e => {
    // Use closest method to make sure icon clicks register correctly
    const char = e.target.closest('button').dataset.value;

    if (
      String(displayNum) === '0' &&
      operatorRegex.test(char) &&
      operatorRegex.test(historyArr[historyArr.length - 1])
    ) {
      setHistoryArr(() => {
        const arr = [...historyArr];
        arr.pop();
        arr.push(char);
        return arr;
      });

      setDisplayNum('0');
    } else if (operatorRegex.test(char)) {
      setHistoryArr(() => {
        return [...historyArr, displayNum, char];
      });

      setDisplayNum('0');
    } else if (char === 'plusMinus') {
      let newNum = displayNum;

      if (newNum[0] === '-') {
        newNum = newNum.substring(1);
      } else {
        newNum = `-${newNum}`;
      }

      setDisplayNum(newNum);
    } else {
      // only allow 1 decimal point
      if (String(displayNum).includes('.') && char === '.') return;

      let newNum = displayNum + char;

      // Remove error message
      if (String(newNum).includes('error')) {
        newNum = newNum.replace('error', '');
      }

      // remove leading 0
      if (newNum[0] === '0' && newNum[1] !== '.') newNum = newNum.substring(1);
      setDisplayNum(newNum);
    }
  };

  const handleCalc = () => {
    try {
      setHistoryArr(() => [...historyArr, displayNum]);
      const result = evaluate(historyArr.join('') + displayNum);
      setDisplayNum(result);
    } catch (err) {
      console.error(`💥 💥 ${err}`);
      setDisplayNum('error');
    }
  };

  const handleReset = () => {
    setDisplayNum(0);
    setHistoryArr([]);
  };

  const handleCancel = () => {
    setHistoryArr(() => {
      const arr = [...historyArr];
      arr.pop();
      return arr;
    });

    setDisplayNum(0);
  };

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Box className="app">
          <Box sx={{ width: { xs: '85%', sm: '60%' }, ml: 'auto', mr: 'auto' }}>
            <Display displayNum={displayNum} />
            <SmallDisplay historyArr={historyArr} />
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
