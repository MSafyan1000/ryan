import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? 'https://automation-consulting-services.herokuapp.com/graphql'
      : 'http://localhost:3000/graphql',
});

export default client;
