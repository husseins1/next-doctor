import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/Layout';
import { SessionProvider } from "next-auth/react"
import { MantineProvider, NormalizeCSS, GlobalStyles,  ColorSchemeProvider, ColorScheme } from '@mantine/core';

import ContextProvider, { Context } from '../context';
import { useState } from 'react';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';


function MyApp({ Component, pageProps: { session, ...pageProps }, }: AppProps) {

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  

  return (
      <SessionProvider session={session}>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <ContextProvider>
        <NormalizeCSS />
        <GlobalStyles />
          <MantineProvider theme={{ colorScheme,
          fontFamily:"Poppins, sans-serif", 
          
           
          }} withGlobalStyles>
            

          <Component {...pageProps} />

        
        
      </MantineProvider>
    </ContextProvider>
    </ColorSchemeProvider>
    
    </SessionProvider >

        
      

  )
}

export default MyApp;

