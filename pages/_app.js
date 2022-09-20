import '../styles/styles.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>

    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>

  </ApolloProvider>
}

export default MyApp
