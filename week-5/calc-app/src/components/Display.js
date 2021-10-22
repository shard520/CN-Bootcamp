import { createTheme, Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';

const displayTheme = createTheme({
  typography: {
    fontFamily: ['digital', 'alarm', 'monospace'].join(','),
    textAlign: 'right',
    fontSize: 40,
  },
});

const Display = ({ displayNum }) => {
  return (
    <Box>
      <ThemeProvider theme={displayTheme}>
        <Typography
          sx={{
            textAlign: 'right',
            border: '1px solid',
            borderColor: 'primary.main',
            borderRadius: 1,
            p: 2,
            mb: 2,
          }}
        >
          {displayNum}
        </Typography>
      </ThemeProvider>
    </Box>
  );
};

export default Display;
