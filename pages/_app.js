import '../styles/globals.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from "styled-components"
import * as theme from "../lib/theme"


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
