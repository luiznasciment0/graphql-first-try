import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  HttpLink,
  from 
} from "@apollo/client";
import { onError } from '@apollo/client/link/error'

import GetUsers from './Components/GetUsers'

const errorLink = onError(({ graphQlErros, networkError }) => {
  if (graphQlErros) {
    graphQlErros.map((message, location, path) => {
      return alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:5000/graphql" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
  );
}

export default App;
