import { createTheme, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';

const smallDisplayTheme = createTheme({
  typography: {
    fontFamily: ['digital', 'alarm', 'sans-serif'].join(','),
    textAlign: 'right',
    fontSize: 15,
  },
});

const SmallDisplay = ({ historyArr }) => {
  return (
    <Box>
      <ThemeProvider theme={smallDisplayTheme}>
        <Typography
          sx={{
            textAlign: 'right',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 1,
            p: 1,
            mb: 2,
          }}
        >
          {historyArr.length > 0 ? historyArr.join(' ') : 0}
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default SmallDisplay;
