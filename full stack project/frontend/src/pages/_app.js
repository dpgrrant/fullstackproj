import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Nav from '../components/Nav'
import theme from '../theme'
import "../styles/posts.css"

function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider resetCSS theme={theme}>
      <Nav/>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
