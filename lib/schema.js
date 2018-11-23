
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type AccountLimits {
  overdraft: Float
  total: Float
  singleSpend: Float
}

type Account {
  id: ID
  type: String
  balance: Float
  currency: String
  limits: AccountLimits
}

type CardLimits {
  authorised: Float
  singleSpend: Float
}

type Card {
  id: ID,
  type: String,
  balance: Float,
  currency: String,
  limits: CardLimits
}

type Customer {
  id: ID
  name: String
  NINumber: String
  accounts: [Account]
  cards: [Card]
}

type Query {
  customer(id: String): Customer
  badCustomer(id: String): Customer
}
`);