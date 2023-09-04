import { ChakraProvider } from '@chakra-ui/react'
import "../css/tailwind.css";
import { extendTheme } from '@chakra-ui/react';

const colors = {
  tertiary: "#00003f",
  bg: {
    "primary": '#046CF1',
    "secondary": '#ffffff',
    "tertiary": '#00003f',
  },
}

export const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <div className='bg-primary'>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
