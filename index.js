const express = require('express');
const graphqlHTTP = require('express-graphql');

const {
    searchCustomerById,
    searchCardsByCustomerId,
    searchAccountsByCustomerId
} = require('./lib/api');
const schema = require('./lib/schema');
const resolver = require('./lib/resolver');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));