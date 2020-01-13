

## Quickstart

Install dependencies:

```
yarn/npm install
```

Start the development server:

```
yarn/npm start
```

This will serve the app on `http://localhost:3000`


## Configure

Configuration is done with environment variables specified in `.env`

Edit `.env` to specify the URI of the GraphQL API. The default is `http://localhost:4000`

*.env*

```
REACT_APP_GRAPHQL_URI=http://localhost:4000
```

*src/index.js*

```
const client = new ApolloClient({
  uri: "http://localhost:4000",
  onError(all) {
    console.log(all);
  }
});
```



