import { StrictMode } from 'react'
import {createTheme , MantineProvider } from '@mantine/core';


import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const theme = createTheme({
  /** Put your mantine theme override here */
});



createRoot(document.getElementById('root')).render(
 
  <StrictMode>

    <MantineProvider theme={theme}>
    <App/>
    </MantineProvider>
  </StrictMode>
  );

