import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context'; // Importamos la Clase

// 1. Configuramos el Link de Autenticación con la Clase SetContextLink
const authLink = new SetContextLink((operation, prevContext: any) => {
  console.log(operation);
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...prevContext.headers,
      auth: token,
    }
  };
});

// 2. Configuramos el Link de HTTP
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPH_HOST || 'http://localhost:4000/',
});

// 3. Unimos los eslabones usando ApolloLink.from o concat
export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});