import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Name } from './Name';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Thing = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Box sx={{ width: '100%' }}>
          <Typography variant="h1" gutterBottom>
            Welcome Free
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

function App() {
  const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <ThemeProvider theme={isDarkModeEnabled ? darkTheme : lightTheme}>
      <CssBaseline />
      <Thing />
    </ThemeProvider>
  );
}

export default App;
